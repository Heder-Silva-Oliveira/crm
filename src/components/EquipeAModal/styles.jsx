import styled,{css} from "styled-components";

export const ModalBack = styled.div`

position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-Color: rgb(0,0,0, 0.7);
z-Index: 1000;
`;


export const ModalDiv = styled.div`

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

margin-left: auto;
margin-right: auto;
margin-top: 100px;
margin-bottom: auto;
border-radius:10px;
background-color: #E9C1D3;
width: 400px;
height: 300px;
border: solid 5px black;


`;


