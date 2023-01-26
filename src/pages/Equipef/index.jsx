import React from "react";
import Navbar from "../../components/navbarUser";
import { Container} from "./styles";
import Contents from "../../components/EquipeFCards"






  const contentsInfo = [
    {
        id: "C001TRU651",
        tag: "Finanças risco de crédito",
        name:"Pagamentos operações e obrigações fiscais",
        status:"Active",
    },
    {
      id: "C002TRU652",
      tag: "IBBA",
      name:"Produtos IB",
      status:"Active",
  },
  {
    id: "C003TRU653",
    tag: "Finanças risco de crédito",
    name:"Pagamentos operações e obrigações fiscais",
    status:"Active",
},
{
  id: "C004TRU654",
  tag: "Finanças risco de crédito",
  name:"Pagamentos operações e obrigações fiscais",
  status:"Inactive",
},
{
  id: "C004TRU654",
  tag: "Finanças risco de crédito",
  name:"Pagamentos operações e obrigações fiscais",
  status:"Inactive",
},
{
  id: "C004TRU654",
  tag: "Finanças risco de crédito",
  name:"Pagamentos operações e obrigações fiscais",
  status:"Inactive",
},
{
  id: "C004TRU654",
  tag: "Finanças risco de crédito",
  name:"Pagamentos operações e obrigações fiscais",
  status:"Inactive",
},
{
  id: "C004TRU654",
  tag: "Finanças risco de crédito",
  name:"Pagamentos operações e obrigações fiscais",
  status:"Inactive",
},


];


export default function Cards()
{
  return (


<>
  <Navbar />


   
      <Container>

    

        {contentsInfo.map((item) => {
          return (
            <Contents
              id={item.id}
              tag={item.tag}
              name={item.name}
              status={item.status} />

          );

        })}
  
     </Container>

     
  
     </>

    

  );
}
