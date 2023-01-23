import React from 'react'
import Navbar from '../../components/navbarUser'
import { H2 } from './styles';
import { DIV } from './styles';
import { INPUT } from './styles';
import { useState } from "react";
import{dados} from './Cards'

function Equipea() {

    const [dadoss] = useState(dados);
    console.log(dados);

    



    return (
        <>
        
        {dados.map((item)=>(
            <ul>
               
                <li >id: {item.id}</li>
                <li>span1:{item.span1}</li>
                <li>span2:{item.span2}</li>
                <li>text:{item.text}</li>                  
           </ul>  
        ))}
            
            
           
              
        </>
    )
   
}

export default Equipea;

