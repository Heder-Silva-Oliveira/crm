import React from 'react'
import Navbar from '../../components/navbarUser'
import { H2 } from './styles';
import { DIV } from './styles';
import { INPUT } from './styles';
import { useState } from "react";
<<<<<<< Updated upstream


function Equipea() {

    function adicionaName(name){
       
        setName(name)
        console.log('Cadastrou o usuário')
        console.log(name)

      // buscaInput = e =>{
        //    console.log(e)
       // }
    }

    const [name, setName] = useState("");

=======
import Cards from '../../components/EquipeACards/index';

function Equipea() {

    
     const dados = [
        {
          id: 1,
          span1: "aaaaaaaaaa",
          span2: "Texto",
          text: "texto",
        },
        {
          id: 2,
          span1: "bbbbbbbbbbbbb",
          span2: "texto",
          text: "Texto ",
        },
      {
        id: 3,
        span1: "ccccccc",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 4,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 5,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 6,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 7,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 8,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 9,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 10,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 10,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 10,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 10,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
      {
        id: 10,
        span1: "texto",
        span2: "Texto",
        text: "texto",
      },
    ]
   
>>>>>>> Stashed changes
    return (
        <>
            
            <Navbar/>
            {/*primeiro teste */}
            <br/>
            <H2>Alguém me salva</H2>
             {/*SEGUNDO teste */}
             <br/>
             
            <form onSubmit={adicionaName}/>
                <DIV>
                    <label htmlFor="name"></label>
                    <INPUT type="text" id="name" name="name" placeholder= "Digite o seu e-mail"/>

                    <INPUT type="text" id="name2" name="name" placeholder= "Digite o seu e-mail"
                    onKeyDown={(e) => this.buscaInput(e)}/>
                </DIV>
            
            <form/>
            
            
            
        </>
    )
    
 
   
}

export default Equipea;