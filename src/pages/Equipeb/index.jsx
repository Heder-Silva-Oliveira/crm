import {React} from 'react'
import Card from '../../components/equipebCards';
import Navbar from "../../components/navbarUser"

import { MainStyle, BoardStyle} from "./styles";

const Equipeb = () => {
  const cards = [
    {
        id: 1,
        span1: "Habilitado",
        span2: "Funcionando",
        text: "Este é o primeiro card",
    },
    {
        id: 2,
        span1: "Desabilitado",
        span2: "Funcionando",
        text: "Este é o segundo card",
    },
    {
        id: 3,
        span1: "Progresso",
        span2: "Funcionando",
        text: "Este é o Terceiro card",
    },
    {
      id: 4,
      span1: "Habilitado",
      span2: "Funcionando",
      text: "Este é o quarto card",
  },
  {
      id: 5,
      span1: "Desabilitado",
      span2: "Funcionando",
      text: "Este é o quinto card",
  },
  {
      id: 6,
      span1: "Progresso",
      span2: "Funcionando",
      text: "Este é o sexto card",
  },
  {
    id: 1,
    span1: "Habilitado",
    span2: "Funcionando",
    text: "Este é o primeiro card",
},
{
    id: 2,
    span1: "Desabilitado",
    span2: "Funcionando",
    text: "Este é o segundo card",
},
{
    id: 3,
    span1: "Progresso",
    span2: "Funcionando",
    text: "Este é o Terceiro card",
},
{
  id: 4,
  span1: "Habilitado",
  span2: "Funcionando",
  text: "Este é o quarto card",
},
{
  id: 5,
  span1: "Desabilitado",
  span2: "Funcionando",
  text: "Este é o quinto card",
},
{
  id: 6,
  span1: "Progresso",
  span2: "Funcionando",
  text: "Este é o sexto card",
},
{
  id: 1,
  span1: "Habilitado",
  span2: "Funcionando",
  text: "Este é o primeiro card",
},
{
  id: 2,
  span1: "Desabilitado",
  span2: "Funcionando",
  text: "Este é o segundo card",
},
{
  id: 3,
  span1: "Progresso",
  span2: "Funcionando",
  text: "Este é o Terceiro card",
},
{
id: 4,
span1: "Habilitado",
span2: "Funcionando",
text: "Este é o quarto card",
},
{
id: 5,
span1: "Desabilitado",
span2: "Funcionando",
text: "Este é o quinto card",
},
{
id: 6,
span1: "Progresso",
span2: "Funcionando",
text: "Este é o sexto card",
},

  
  
];

  return (
    <MainStyle>
      <Navbar />
      <h1>Vamos</h1>
      <BoardStyle>
        {cards.map(item => (
            <Card  
              span1={item.span1} 
              span2={item.span2} 
              text={item.text} />
        ))};
      </BoardStyle>
    </MainStyle>
  )
}

export default Equipeb;