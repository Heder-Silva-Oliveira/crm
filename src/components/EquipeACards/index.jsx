import React from 'react';
import { Caixa,Topo,Icon,Div,Corpo } from './styles';

//ICONES

import  {BiTrash}  from "@react-icons/all-files/bi/BiTrash";
import  {MdEdit}  from "@react-icons/all-files/md/MdEdit";




const index = ({id, span1, span2, text,iconR}) => {
  return (
    <Div>
      <Topo>
        <Caixa >{id} </Caixa> 
        <Icon>
         
            <MdEdit onClick={() => console.log( {id},{span1},{span2},{text})}  size={20}/>

            <BiTrash  size={20}/>
          
         
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
