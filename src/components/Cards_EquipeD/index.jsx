import React from "react";


import {Ul,Shape1,Shape2,Buttons,Button3,Button4,Lit,Img} from "./styles";

import Lapis from "../../img/Lapis.jpg";
import Lixo from "../../img/Lixo.png";
class Card extends React.Component{

    render(){
        return(
            <Ul>
                <div>
                <Shape1><li>{this.props.span1}</li></Shape1>
                <Shape2><li>{this.props.span2}</li></Shape2>
              
              <Buttons>
                <Button3>
                <Img src={Lapis}/>
                </Button3>
                <Button4>
                <Img src={Lixo}/>  
                </Button4>
              </Buttons>
                
                <Lit>{this.props.text}</Lit>
                </div>
           </Ul>
        );
     
    }
            
}

export default Card;