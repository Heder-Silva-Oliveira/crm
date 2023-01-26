import React from 'react'
import { useState } from 'react';
import Navbar from "../../components/navbarUser"

import { H1, Button, Div, DIVC} from "./styles";

const Equipej = () => {

  const [name, setName] = useState();
  
  return (
    <>
    <Navbar/>
    <header>
        <Div className="container">
          <DIVC>
            <Button>enviar</Button>
            <H1>Hello {name}</H1>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
          </DIVC>
        </Div>
    </header>
    </>
  )
}

export default Equipej;