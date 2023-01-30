import {Cartao, Botao1, Botao2} from "./styles";
import React from "react";

function Cartoes (props){
    return(
        <Cartao>
            <h1>{props.id}</h1>
           <h2>{props.text}</h2>
           <Botao1>{props.span1}</Botao1>
           <Botao2>{props.span2}</Botao2>
           
        </Cartao>  
    )
}
export default Cartoes

//teste