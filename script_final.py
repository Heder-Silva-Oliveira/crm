
import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job
  
sc = SparkContext.getOrCreate()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)

from pyspark.sql.functions import concat,col,to_date, round, sum, month, year, when, last_day, row_number, split, current_timestamp, lit,date_format
from pyspark.sql.types import StructType, StructField, StringType, IntegerType, LongType, DateType,DecimalType,DoubleType,ShortType
from datetime import datetime, date
from pyspark.sql.window import Window
import boto3
import os
dyf = glueContext.create_dynamic_frame.from_catalog(database='db_inputs', table_name='parametro_csv')
dyf.printSchema()
hp1 = glueContext.create_dynamic_frame.from_catalog(database='db_inputs', table_name="historico_pagamento_csv")
hr1 = glueContext.create_dynamic_frame.from_catalog(database='db_inputs', table_name="historico_recebimento_csv")
hp = hp1.toDF()
hr = hr1.toDF()
parametro = dyf.toDF()
df = parametro.withColumn("DESCRICAO_SPLIT", split(parametro["DESCRICAO"], ","))

# Escolhendo as colunas a partir do plit
df = df.withColumn("VAR_DESCRICAO", col("DESCRICAO_SPLIT")[0].cast(StringType()))\
.withColumn("VAR_DT_INICIAL", col("DESCRICAO_SPLIT")[1].cast(DateType()))\
.withColumn("VAR_DT_FINAL", col("DESCRICAO_SPLIT")[2].cast(DateType()))\
.withColumn("VAR_DT_ATUAL", col("DESCRICAO_SPLIT")[3].cast(DateType()))\
.withColumn("VAR_EXPURGO", col("DESCRICAO_SPLIT")[4].cast(IntegerType()))\
.withColumn("VAR_STATUS", col("DESCRICAO_SPLIT")[5].cast(IntegerType()))

# DataFrame resultante
parametro = df.select("COD","DESCRICAO", "VAR_DESCRICAO", "VAR_DT_INICIAL", "VAR_DT_FINAL","VAR_DT_ATUAL","VAR_EXPURGO", "VAR_STATUS")
hp.show()
# DBTITLE 1,Fluxo C. Inicial
data_hoje = datetime.now().date()
dt_atual = parametro.filter(parametro.COD == 2).select(parametro.VAR_DT_ATUAL).first()[0] # Vai no lugar 2023-10-30
status = parametro.filter(parametro.COD == 1).select(parametro.VAR_STATUS).first()[0]
mes_atual = int((datetime.now().strftime('%m'))) #verificar ano/mes
ano_atual = int(datetime.now().strftime('%Y'))
mes_passado = (mes_atual - 1)

print(status)
if mes_passado <= 0:
    mes_passado += 12 
hr_am = hr.withColumn("ano_mes", date_format(col("data_recebido"), "yyyyMM"))
hp_am = hp.withColumn("ano_mes", date_format(col("data_pgt_efetuado"), "yyyyMM"))
hp_am.show()
if status == 0:
    if data_hoje >= dt_atual:  #entra dt_atual que vem do parametro
        fxdr0 = hr_am.filter(hr_am.ano_mes < data_hoje.strftime('%Y%m'))
        fxdr = fxdr0.withColumn('MES', month('DATA_RECEBIDO').cast(IntegerType())).groupBy('DATA_RECEBIDO', 'MES').agg(sum('VALOR_PAGO').alias('RECEBIMENTO_DIA')).orderBy('DATA_RECEBIDO')
        #fxdr0.show()

        fxdp0 = hp_am.filter(hp_am.ano_mes < data_hoje.strftime('%Y%m'))
        fxdp = fxdp0.withColumn('MES', month('DATA_PGT_EFETUADO').cast(IntegerType())).groupBy('DATA_PGT_EFETUADO', 'MES').agg(sum('VALOR_PARCELA_PAGO').alias('PAGAMENTO_DIA')).orderBy('DATA_PGT_EFETUADO')
        #fxdp.show()

        fluxo_diario = fxdp.join(fxdr,fxdp.DATA_PGT_EFETUADO == fxdr.DATA_RECEBIDO, 'full').select(
                when(fxdp.DATA_PGT_EFETUADO.isNull(),fxdr.DATA_RECEBIDO).otherwise(fxdp.DATA_PGT_EFETUADO).alias("DATA"),
                when(fxdp.PAGAMENTO_DIA.isNull(),0).otherwise(fxdp.PAGAMENTO_DIA).alias("SAIDA"),
                when(fxdr.RECEBIMENTO_DIA.isNull(),0).otherwise(fxdr.RECEBIMENTO_DIA).alias("ENTRADA"),
                (when(fxdr.RECEBIMENTO_DIA.isNull(),0).otherwise(fxdr.RECEBIMENTO_DIA) - when(fxdp.PAGAMENTO_DIA.isNull(),0).otherwise(fxdp.PAGAMENTO_DIA)).alias("SALDO_DIARIO")
        )
        
        window_spec = Window.orderBy('DATA').partitionBy(lit(1)).rowsBetween(Window.unboundedPreceding, 0)
        fluxo_diario_f = fluxo_diario.withColumn('ACUMULADO_DIARIO',sum('SALDO_DIARIO').over(window_spec)).withColumn("DATA_FECHAMENTO", last_day("DATA")).withColumn('DATA_PROCESSADO',current_timestamp())

        #MENSAL

        fmr0 = hr_am.withColumn("DATA_FECHAMENTO", last_day("DATA_RECEBIDO"))\
        .groupBy("DATA_FECHAMENTO", year('DATA_RECEBIDO').alias('ANO'), month('DATA_RECEBIDO').alias('MES_RECEBIDO'))\
        .agg(sum('VALOR_PAGO').alias('RECEBIMENTO_MES')).orderBy('DATA_FECHAMENTO')
        fmr0 = fmr0.withColumn("ano_mes", date_format(col("DATA_FECHAMENTO"), "yyyyMM"))
        fmr = fmr0.filter(fmr0.ano_mes < data_hoje.strftime('%Y%m')) #filtro meses
        
        fmp0 = hp_am.withColumn("DATA_FECHAMENTO", last_day("DATA_PGT_EFETUADO"))\
        .groupBy("DATA_FECHAMENTO", year('DATA_PGT_EFETUADO').alias('ANO'), month('DATA_PGT_EFETUADO').alias('MES'))\
        .agg(sum('VALOR_PARCELA_PAGO').alias('PAGAMENTO_MES')).orderBy('DATA_FECHAMENTO')
        fmp0 = fmp0.withColumn("ano_mes", date_format(col("DATA_FECHAMENTO"), "yyyyMM"))
        fmp = fmp0.filter(fmp0.ano_mes < data_hoje.strftime('%Y%m')) #filtro meses

        fx_mensal = fmp.join(fmr, fmp.DATA_FECHAMENTO == fmr.DATA_FECHAMENTO, 'full').select(
                when(fmp.DATA_FECHAMENTO.isNull(),fmr.DATA_FECHAMENTO).otherwise(fmp.DATA_FECHAMENTO).alias('DATA_FECHAMENTO'),
                when(fmp.ANO.isNull(),fmr.ANO).otherwise(fmp.ANO).alias('ANO'),
                when(fmp.MES.isNull(),fmr.MES_RECEBIDO).otherwise(fmp.MES).alias('MES',),
                when(fmr.RECEBIMENTO_MES.isNull(),0).otherwise(fmr.RECEBIMENTO_MES).alias("ENTRADA"),
                when(fmp.PAGAMENTO_MES.isNull(),0).otherwise(fmp.PAGAMENTO_MES).alias("SAIDA"),        
                (when(fmr.RECEBIMENTO_MES.isNull(),0).otherwise(fmr.RECEBIMENTO_MES) - when(fmp.PAGAMENTO_MES.isNull(),0).otherwise(fmp.PAGAMENTO_MES)).alias("SALDO_MENSAL")
                )


        window_spec = Window.orderBy('DATA_FECHAMENTO').partitionBy(lit(1)).rowsBetween(Window.unboundedPreceding, 0)
        fx_mensal_f = fx_mensal.withColumn('VALOR_ACUMULADO_MES', sum('SALDO_MENSAL').over(window_spec)).withColumn('DATA_PROCESSADO',current_timestamp())
        #fx_mensal_f.show()        
        #update status 
        parametro = parametro.withColumn('VAR_STATUS', when(parametro.COD == 1, lit(1)).otherwise(parametro.VAR_STATUS))
        alterar=parametro.withColumn("DESCRICAO_CONCAT", concat(

                col("VAR_DESCRICAO"), lit(","), 
                col("VAR_DT_INICIAL"), lit(","), 
                col("VAR_DT_FINAL"), lit(","), 
                col("VAR_DT_ATUAL"), lit(","), 
                col("VAR_EXPURGO"), lit(","), 
                col("VAR_STATUS")
                )).select('COD',"DESCRICAO_CONCAT")

        #alterar.show(truncate=False) #.write.csv('', header=True, mode='overwrite')
    else:  
        #DIARIO
        print('ELSE')
        fxdr0 = hr_am.filter(hr_am.ano_mes < data_hoje.strftime('%Y%m')) 
        fxdr = fxdr0.withColumn('MES', month('DATA_RECEBIDO').cast(IntegerType())).groupBy('DATA_RECEBIDO', 'MES').agg(sum('VALOR_PAGO').alias('RECEBIMENTO_DIA')).orderBy('DATA_RECEBIDO')
        #fxdr.show(50)

        fxdp0 = hp_am.filter(hp_am.ano_mes < data_hoje.strftime('%Y%m'))
        fxdp = fxdp0.withColumn('MES', month('DATA_PGT_EFETUADO').cast(IntegerType())).groupBy('DATA_PGT_EFETUADO', 'MES').agg(sum('VALOR_PARCELA_PAGO').alias('PAGAMENTO_DIA')).orderBy('DATA_PGT_EFETUADO')
        #fxdp.show(50)

        fluxo_diario = fxdp.join(fxdr,fxdp.DATA_PGT_EFETUADO == fxdr.DATA_RECEBIDO, 'full').select(
                when(fxdp.DATA_PGT_EFETUADO.isNull(),fxdr.DATA_RECEBIDO).otherwise(fxdp.DATA_PGT_EFETUADO).alias("DATA"),
                when(fxdp.PAGAMENTO_DIA.isNull(),0).otherwise(fxdp.PAGAMENTO_DIA).alias("SAIDA"),
                when(fxdr.RECEBIMENTO_DIA.isNull(),0).otherwise(fxdr.RECEBIMENTO_DIA).alias("ENTRADA"),
                (when(fxdr.RECEBIMENTO_DIA.isNull(),0).otherwise(fxdr.RECEBIMENTO_DIA) - when(fxdp.PAGAMENTO_DIA.isNull(),0).otherwise(fxdp.PAGAMENTO_DIA)).alias("SALDO_DIARIO")
        )

        window_spec = Window.orderBy('DATA').partitionBy(lit(1)).rowsBetween(Window.unboundedPreceding, 0)
        fluxo_diario_f = fluxo_diario.withColumn('ACUMULADO_DIARIO',sum('SALDO_DIARIO').over(window_spec)).withColumn("DATA_FECHAMENTO", last_day("DATA")).withColumn('DATA_PROCESSADO',current_timestamp())

        #MENSAL

        fmr0 = hr.withColumn("DATA_FECHAMENTO", last_day("DATA_RECEBIDO")).groupBy("DATA_FECHAMENTO", year('DATA_RECEBIDO').alias('ANO'), month('DATA_RECEBIDO').alias('MES_RECEBIDO')).agg(sum('VALOR_PAGO').alias('RECEBIMENTO_MES')).orderBy('DATA_FECHAMENTO')
        fmr0 = fmr0.withColumn("ano_mes", date_format(col("DATA_FECHAMENTO"), "yyyyMM"))
        fmr = fmr0.filter((fmr0.MES_RECEBIDO) < (mes_passado)) #filtro meses

        fmp0 = hp.withColumn("DATA_FECHAMENTO", last_day("DATA_PGT_EFETUADO")).groupBy("DATA_FECHAMENTO", year('DATA_PGT_EFETUADO').alias('ANO'), month('DATA_PGT_EFETUADO').alias('MES')).agg(sum('VALOR_PARCELA_PAGO').alias('PAGAMENTO_MES')).orderBy('DATA_FECHAMENTO')
        fmp0 = fmp0.withColumn("ano_mes", date_format(col("DATA_FECHAMENTO"), "yyyyMM"))
        fmp = fmp0.filter(fmp0.ano_mes < data_hoje.strftime('%Y%m')) #filtro meses

        fx_mensal = fmp.join(fmr, fmp.DATA_FECHAMENTO == fmr.DATA_FECHAMENTO, 'full').select(
                when(fmp.DATA_FECHAMENTO.isNull(),fmr.DATA_FECHAMENTO).otherwise(fmp.DATA_FECHAMENTO).alias('DATA_FECHAMENTO'),
                when(fmp.ANO.isNull(),fmr.ANO).otherwise(fmp.ANO).alias('ANO'),
                when(fmp.MES.isNull(),fmr.MES_RECEBIDO).otherwise(fmp.MES).alias('MES',),
                when(fmr.RECEBIMENTO_MES.isNull(),0).otherwise(fmr.RECEBIMENTO_MES).alias("ENTRADA"),
                when(fmp.PAGAMENTO_MES.isNull(),0).otherwise(fmp.PAGAMENTO_MES).alias("SAIDA"),        
                (when(fmr.RECEBIMENTO_MES.isNull(),0).otherwise(fmr.RECEBIMENTO_MES) - when(fmp.PAGAMENTO_MES.isNull(),0).otherwise(fmp.PAGAMENTO_MES)).alias("SALDO_MENSAL")
                )

        window_spec = Window.orderBy('DATA_FECHAMENTO').partitionBy(lit(1)).rowsBetween(Window.unboundedPreceding, 0)
        fx_mensal_f = fx_mensal.withColumn('VALOR_ACUMULADO_MES', sum('SALDO_MENSAL').over(window_spec)).withColumn('DATA_PROCESSADO',current_timestamp())
        #update status 
        parametro = parametro.withColumn('VAR_STATUS', when(parametro.COD == 1, lit(1)).otherwise(parametro.VAR_STATUS))

    fluxo_diario_f.show()
    fx_mensal_f.show()     

else:
    print("Não é a primeira carga")
    

alterar.write.format("csv").option("sep", ",").mode("append").save("s3://heder-input-glue/alterar")
#s3_output_path = "s3://heder-input-glue/alterar.csv"
#data_frame.write.format("csv").option("sep", ",").option("header", "true").mode("overwrite").csv(s3_output_path)

s3_client = boto3.client('s3')
response = s3_client.list_objects(Bucket='heder-input-glue')

for file in response['Contents']: 
    if 'alterar/part' in file['Key']:
        nome_original = file['Key']
   
        
# Renomear
novo_nome = "s3://heder-input-glue/alterar.csv"
s3_client = boto3.client('s3')
s3_client.copy_object(Bucket="heder-input-glue", CopySource={"Bucket": "heder-input-glue", "Key": nome_original}, Key = "alterar.csv")
s3_client.delete_object(Bucket="heder-input-glue", Key = nome_original)

# Remover o arquivo local (opcional)
#os.remove(nome_original)
    
job.commit()