import styled from "styled-components";

export const Card = styled.div`
background-color:#fff;
color:#2b2b2b;
padding-left:15px;
padding-top:10px;
width:330px;
display:grid;
grid-template-columns: 90% 5%;
grid-template-rows: 10% 0% 20% 40% 30% ;
height:210px;
margin:20px 15px;
border-radius:10px;
align-items: center;
border-left:15px solid #00953B;
`;

export const H1 = styled.h1`
font-size:17px;
grid-row:1;
`;

export const Editar = styled.div`
font-size:18px;
cursor:pointer;
margin-right:5px;
grid-row:2;
text-align:right;
`;

export const Deletar = styled.div`
font-size:16px;
cursor:pointer;
grid-row:2;
text-align:right;
`;

export const H2 = styled.h2`
font-size:12px;
padding:6px;
background-color:#15E667;
border-radius:5px;
max-width:fit-content;
grid-row:3;
`;


export const H3 = styled.h3`
font-size:16px;
width:100%;
margin-left:5px;
margin-top:0px;
grid-row:4;
text-transform:uppercase;
text-align:center;
`;


export const Button = styled.button`
font-size:18px;
margin-left:7px;
padding:5px;
grid-row:5;
width:100%;
border-radius:4px;
cursor:pointer;
align-items: center;
background-color:#AFB2BB;
border:none;
`;

export const Section = styled.section`
color:#000;
width:500px;
`;

export const Button1 = styled.button`
border:none;
cursor:pointer;
font-size:17px;

`;

