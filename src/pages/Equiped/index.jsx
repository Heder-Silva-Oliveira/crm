
// Imports Components
import React,{ useState } from "react" ;
import Navbar from "../../components/navbarUser";
import Card from "../../components/Cards_EquipeD";


// Imports Style
import {H1 , Div, Input} from "./styles";


function Equiped() {

    const [text,setText] = useState()

   
    const reflectedMessage = (e) => {
        setText(e.target.value);
    
      }
  
    const cards =[
      {
        id:1,
        span1: "Habilitado",
        span2: "Funciona",
        text: "Primeiro Card"
      },
      {
        id:2,
        span1: "teste",
        span2: "sempre",
        text: "Segundo Card"
      },
      {
        id:3,
        span1: "Habilitado",
        span2: "Funciona",
        text: "Terceiro Card"
      },{
        id:4,
        span1: "Teste 4 ",
        span2: "Alguma coisa",
        text: "Quarto card"
      },
    ]
    
      

    return (
      <>   
            <Navbar />
            <H1>Equipe D</H1>


            <Input type="text" id="textMessage" name="textMessage"
              onChange={reflectedMessage} value={text} />
      
             <Input value={text}/>
       
       
               <Div>
                  {cards.map((item,i) =>(
                        <Card key={i}
                        id={item.id} span1={item.span1} 
                        span2={item.span2} 
                        text={item.text}/>))}
              </Div>
               
              
              
              
      
        
           
        </>)
        
}
    
      
 

  export default Equiped;

