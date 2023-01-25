import Navbar from "../../components/navbarUser";
import {Caixa} from "../../components/container/styles";
import Cartoes from "../../components/card";
import {Subject} from "../../components/Subject/styles";
import { Corpinho } from "./styles";

const clientes = [

 {
  id : 1, span1 :"Cancel", span2 : "Confirm", text : "Jair Alves"
 },
{
  id : 2, span1 : "Cancel", span2: "Confirm", text: "Jose Dias"
},
{
  id : 3, span1 : "Cancel", span2: "Confirm", text: "Vinicius Tristao"
},
{
  id : 4, span1:"Cancel", span2: "Confirm", text: "Isabela Bueno"
},
{
  id : 5, span1:"Cancel", span2: "Confirm", text: "Jeferson Pilar"
},
{
  id : 6, span1:"Cancel", span2: "Confirm", text: "Jeremias Cleiton"
},
{
  id : 7, span1:"Cancel", span2: "Confirm", text: "Elias alves"
}

]
 

function equipec (){
  
  return(
    <>
    <Navbar></Navbar>
<Corpinho>
  
  <Caixa> 
    {clientes.map((item) => (
      <Cartoes id={item.id} span1={item.span1} span2={item.span2} text={item.text}></Cartoes>
    ))}
    
    

  </Caixa>
 
    
  <Subject>
      <p>Add Subject</p>
      
      <p>Release Train</p>
      <input></input> 

      <p>Business</p>  
      <input></input>

      <p>Name</p>
      <input></input>
      
      <p>Email</p>
      <input></input>

      <p>Subject</p>
      <input></input>

      <p>Text</p>
      <input></input>

  </Subject>

  
</Corpinho>
</>
);

}
export default equipec