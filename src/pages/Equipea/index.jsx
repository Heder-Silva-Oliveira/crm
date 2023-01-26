import React from 'react'
import Navbar from '../../components/navbarUser'
import { H2 } from './styles';
import { DIV } from './styles';
import { INPUT } from './styles';
//import { useState } from "react";


function Equipea() {

    function adicionaName(name){
       
        //setName(name)
        //console.log('Cadastrou o usuário')
        //console.log(name)

      // buscaInput = e =>{
        //    console.log(e)
       // }
    }

    //const [name, setName] = useState("");

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