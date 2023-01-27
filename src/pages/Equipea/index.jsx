import React from 'react'
import Navbar from '../../components/navbarUser'
import { H2 } from './styles';
import { DIV,ModalButon,Container,DivConteudo } from './styles';
import Cards from '../../components/EquipeACards/index';
import { useState } from 'react';
import  {MdEdit}  from "@react-icons/all-files/md/MdEdit";
import NavbarGrup from '../../components/navBarGrupoA/index'
import Modal from '../../components/EquipeAModal';



function Equipea() {

    
     const dados = [
        {
          id: 1,
          span1: "Cardápio",
          span2: "24/01/2023",
          text: "Ver cardápio",
          status: "success"
        },
        {
          id: 2,
          span1: "Bolo de Cenoura",
          span2: "25/01/2023",
          text: "Bolo de cenoura com cobertura de chocolate",
          status: "no"
        },
      {
        id: 3,
        span1: "Lasanha",
        span2: "21/01/2023",
        text: "Lasannha a bolonhesa",
        status: "success"
      },
      {
        id: 4,
        span1: "Sanduíche Natural",
        span2: "20/01/2023",
        text: "Lanche natural de frango e atum",
        status: "no"
      },
      {
        id: 5,
        span1: "Misto quente",
        span2: "22/01/2023",
        text: "Misto quente diferenciado",
        status: "success"
      },
      {
        id: 6,
        span1: "Hot Dog",
        span2: "24/01/2023",
        text: "Hot dog especial",
        status: "success"
      },
      {
        id: 7,
        span1: "Ovo Mechido",
        span2: "12/06/2013",
        text: "Tem em todo café da manhã acompanhado de café",
        status: "success"
      },
      {
        id: 8,
        span1: "Churrasco",
        span2: "22/01/2023",
        text: "A melhor churrascaria da TCS",
        status: "success"
      },
      {
        id: 9,
        span1: "Batata Recheada",
        span2: "30/12/2000",
        text: "Acompanha qualquer coisa que tu quiser",
        status: "success"
      },{
        id: 10,
        span1: "Salada",
        span2: "24//01/2023",
        text: "Pode ser de alface, rucula, agrião, cenoura, ou qualquer coisa",
        status: "success"
      },
      {
        id: 11,
        span1: "Macarrao",
        span2: "03/06/2022",
        text: "Tem de varios sabores, queijo, frango, berinjela, carne",
        status: "success"
      },
      {
        id: 12,
        span1: "Bolinho",
        span2: "22/05/2023",
        text: "Pode escolher o saber que  quiser, pois voce que manda",
        status: "success"
      },
      {
        id: 13,
        span1: "Batata Frita",
        span2: "10/12/2002",
        text: " E bom de comer sla, tem em todo lugar bom e barato",
        status: "success"
      },
    ]
   
    const [state, setState] = useState("false");
    

    return (
        <>
          <Navbar />
          <Container>
              <NavbarGrup/>
                  <DivConteudo>
                    <br/>
                    <H2>Comidas</H2>
                    <br/>
                    <Modal  isOpen={state}
                      icon={<ModalButon onClick={()=> {setState("false")}}></ModalButon>}>
                    </Modal>
                    <DIV >
                      {dados.map((item, index) =>(
                            
                              <Cards
                                key ={item.id}
                                id ={item.id}
                                span1 ={item.span1}
                                span2 ={item.span2}
                                text = {item.text}
                                status = {item.status}
                                icon={<div onClick={()=> {setState("true")}}>
                                  <MdEdit size={20}/>
                                  
                                </div>}
                              
                                
                              />
                              
                            
                          
                            ))
                          }
                      

                    </DIV>
                  </DivConteudo>
          </Container>   
        </>
    )
   
}

export default Equipea;

