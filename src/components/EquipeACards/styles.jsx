import styled,{css} from "styled-components";

export const Div = styled.div`
${(props)=>{
    switch(props.$mode){
        case 'success':
            return css`
                border-left: solid 10px #1fe75b; 

        
        `;
        default:
            return css`
               border-left: solid 10px #050806; 
 
            
            `; 
    }
}}
height: 150px;
width: 150px;
border-radius: 10px;
display: inline-block;
margin-left:auto;
margin-right:auto;
margin-top: 20px;
background-color: white;
align-items: center;


`;

export const Caixa = styled.div`

height: 20px;
width: 20px;
border-radius: 5px;
border:  solid #800000;
color: black;
background-color: #FA8072;
text-align: center;
grid-column: 1;
margin-left:2px;


`;

export const Topo = styled.div`
margin-top: 5px;
margin-left: 1px;
display: grid;
grid-template-columns: 4fr 1fr;

`;


export const Icon = styled.div`

grid-column: 4;
margin-right: 5px;
cursor: pointer;
display: inline-flex;


`;


export const Corpo = styled.div`
font-family: Helvetica;
font-size: 10px;
display: block;
word-wrap: break-word;
margin-left:5px;



`;


