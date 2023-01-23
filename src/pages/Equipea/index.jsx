import React from 'react'
import Navbar from '../../components/navbarUser'
import { H2 } from './styles';
import { DIV } from './styles';
import { INPUT } from './styles';
import { useState } from "react";
import Cards from '../../components/Cards/index';

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
    ]
   
    return (
        <>
          <Navbar />
                <br/>
                <DIV>
                  {dados.map((item) =>(
                    <Cards
                    key ={item.id}
                    id ={item.id}
                    span1 ={item.span1}
                    span2 ={item.span2}
                    text = {item.text}/>
                    ))
                  }
                </DIV>
        </>
    )
   
}

export default Equipea;

