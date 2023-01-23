import React from 'react'
import Navbar from '../../components/navbarUser'
import { H2 } from './styles';
import { DIV } from './styles';
import { INPUT } from './styles';
import { useState } from "react";




function Equipea() {

     const [email, setEmail] = useState("");

    return (
        <>
            
            <Navbar/>
            {/*primeiro teste */}
            <br/>
            <H2>Alguém me salva</H2>
             {/*SEGUNDO teste */}
             <br/>
             
            <form/>
                <DIV>
                    <label htmlFor="name"></label>
                    <INPUT onChange={(e) => setEmail(e.target.value)}/>

                    <a > {email}</a>
                </DIV>
            
            <form/>
              
        </>
    )
   
}

export default Equipea;

