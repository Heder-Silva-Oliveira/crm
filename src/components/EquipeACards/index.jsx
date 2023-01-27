import React from 'react';
import { Caixa,Topo,Icon,Div,Corpo } from './styles';

//ICONES

import  {BiTrash}  from "@react-icons/all-files/bi/BiTrash";







const index = ({id, span1, span2, text, status,icon}) => {
  return (
    <Div $mode = {status}  >
        
          <Topo>
            <Caixa >{id} </Caixa> 
            <Icon>
                {icon}
                <BiTrash/>
            </Icon>
            
          </Topo>
          <Corpo>
              <h1>{span1} </h1>
              <h2>{span2}</h2>
              <p>{text}</p>
          </Corpo>
          
    </Div>
    
  )
  
}

export default index;
