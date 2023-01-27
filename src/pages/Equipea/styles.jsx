import styled,{css} from "styled-components";



export const H2 = styled.h2`
    color: #00083E;
    background-color: #969BBB;
    text-align: center;
    border: black solid;

`;

export const DIV = styled.div`




    background-color: 	#F5F5F5;
    border: black solid;
    border-radius: 5px;
    height: 450px;
    width: 700px;
    text-align: left;
    margin-left: 15px;
    display: grid;
    grid-template-columns: auto auto auto;
    overflow-y: scroll;
    &::-webkit-scrollbar-track {
        background-color: #F8E9E9;
                
    }
        ::-webkit-scrollbar {
        width: 10px;
        height: auto;
        background: #F9E3E3;
    }
       ::-webkit-scrollbar-thumb {
        background: #DB7A7C;
        border-radius: 5px;
    }
     
  
    margin-left: auto;
    margin-right: auto;
    
`;

export const DivAparecer = styled.div`
   
   ${(props)=>{
    switch(props.$mode){
        case'true':
            return css`
               
                z-index: 5;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: aqua;


            `;
            default:
                return css`
                
                background-color: white;
                color: black;
                display: none;   
                `;
        }
    }}
`;



export const Icon = styled.div`

grid-column: 4;
margin-right: 5px;
cursor: pointer;


`;


export const ModalButon = styled.div`

    height: 50px;
    width: 400px;
    border: solid black;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    font-size: 40px;
    text-align: center;
    
    
 `;


export const Container = styled.div`

display: grid;
grid-template-columns: 5% 1fr;
grid-template-rows: 1fr;
grid-column-gap: 10px;
grid-row-gap: 0px;
 `;

export const NavbarGrup = styled.div`

grid-area: 1 / 1 / 2 / 2;
 `;
 export const DivConteudo = styled.div`

grid-area: 1 / 2 / 2 / 3;
 `;

