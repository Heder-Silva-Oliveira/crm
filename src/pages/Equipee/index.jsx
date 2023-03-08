import React from "react";
import styles from './styles';
import { useState } from 'react';
import Navbar from '../../components/navbarUser'



    function Equipee() {
    const [value, setValue] = useState();
          
         const handleChange = (e) => {
              setValue(e.target.value);
            }
          
            return ( 
            <>
              <Navbar> </Navbar>
              <body >

              <div>
                <div style={styles.rectangle}>
                  <p>{value}</p>
                </div>
                <input style={styles.input}
              type="text"
              value={value}
              onChange={handleChange}
              className="custom-input"
            /> </div>
            </body>
             </>
            );
          }
          
      
  
 

export default Equipee;
