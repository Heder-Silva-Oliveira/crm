import styled from "styled-components";

export const Ul = styled.ul `
    background-color: white;
    display: inline-block;
    color : black;
    width: 380px;
    height:280px;
    margin-top: 2%;
    margin-left: 2%;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    list-style: none;
    &:hover{transform: scale(1.2); transition-duration: 0.5s;} 
    border-width: 3px; 
    border-style: solid; 
    border-color: #4F4F4F; 
 
`;

export const Shape1 = styled.div `

    width: 33%;
    display: inline-block;
    margin: 5px;
    background-color : #98FB98; 
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    list-style: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

`;

export const Shape2 = styled.div `

margin-right: 2%;
display: inline-block;
width: 33%;
background-color: #87CEFA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;

`;

export const Button3 = styled.button `
 
    width: 49%;
    margin-right: 1%;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    list-style: none;
    cursor: pointer;

`;

export const Button4 = styled.button `

    width: 49%;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    list-style: none;
    cursor: pointer;

`;

export const Buttons = styled.div `
   
    display: inline-block;
    
`

export const Lit = styled.li `
    
    margin-top : 15px;
    text-align : center;

`;

export const Img = styled.img `
    
    width : 200;
    height : 200;
    border-radius: 200 / 2;

    padding-right: 5%;

`;
