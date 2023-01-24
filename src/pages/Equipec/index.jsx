import React from "react";
import {useState} from "react";
import { Input, Triangulo } from './styles';
import Navbar from "../../components/navbarUser/index";

  

  function Equipec (){
    const [value, setValue] = useState();

        const handleChange = (e) =>{
          setValue(e.target.value);}
        return(
          <>
          <Navbar> 
            
          </Navbar>
          <body>
            <div>
              <Triangulo>  
              <p>{value}</p>
              </Triangulo>
            <Input type="text" 
            value={value} 
            onChange={handleChange} 
            >
            </Input>
             </div>
             </body>
             </>
        );
  }
     export default Equipec;

