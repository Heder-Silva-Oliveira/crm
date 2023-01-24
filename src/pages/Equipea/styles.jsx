import styled from "styled-components";



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
        scrollbar-arrow-color: black;
    }
     
  
    margin-left: auto;
    margin-right: auto;
    
`;
