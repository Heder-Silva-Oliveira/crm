import React from 'react';
import { Caixa,Topo,Icon,Div,Corpo,H1 } from './styles';

//ICONES

import  {BiTrash}  from "@react-icons/all-files/bi/BiTrash";
import  {MdEdit}  from "@react-icons/all-files/md/MdEdit";





const index = ({id, span1, span2, text}) => {
  return (
    <Div>
      <Topo>
        <Caixa >{id} </Caixa> 
        <Icon>
          <MdEdit  size={20}/> 
          <BiTrash size={20}/> 
        </Icon>
        
      </Topo>
      <Corpo>
          <H1>{span1} </H1>
          <h2>{span2}</h2>
          <p>{text}</p>
       </Corpo>
    </Div>
  )
}

export default index
