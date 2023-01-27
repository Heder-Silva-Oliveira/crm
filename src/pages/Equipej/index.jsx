import React, { useState } from 'react'
import Navbar from "../../components/navbarUser"
import Card from './card';
import clientes from './clientes';
import { FaUser, FaTrash, FaSearch } from 'react-icons/fa'
import { H1, Div, DivSubject, DivPage,DivSidebar, H2, Section } from "./styles";

const Equipej = () => {
  const [clientData, setClientData] = useState(clientes);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setClientData(clientData.filter(cliente => cliente.id !== id));
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filterCustomers = () => {
    return clientData.filter(cliente => cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  return (
    <>
    <Navbar/>
    <header>
 
    </header>
    <DivPage>
      <DivSidebar>

      </DivSidebar>

      <Div>

          {filterCustomers().map((cliente, index) => (
            <Section key={index}>
              <Card 
                key={cliente.id}
                nome={<><FaUser/> Nome: {cliente.nome}</>}
                email={`Email: ${cliente.email}`}
                deleteButton={<button onClick={() => handleDelete(cliente.id)}>Delete</button>}
              />
            </Section>
          ))}
      </Div>
      <DivSubject>
      <div>
          <FaSearch />
          <input 
            type="text" 
            placeholder="Search by name" 
            value={searchTerm} 
            onChange={handleSearch}
          />
        </div>

      </DivSubject>

    </DivPage>

    </>
  )
}

export default Equipej;
