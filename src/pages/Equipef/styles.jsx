import styled from "styled-components";

export const H1 = styled.h1`
  background-color: black;
  color: #ffdead;
  text-align: center;
  border-radius: 30px 10px 30px 10px;
`;
export const H2 = styled.h2`
  color: #ffdead;
  background-color: white;
  text-align: center;
`;


export const Input = styled.input`
  height: 35px;
  width: 400px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  //border-radius: 10px 20px 30px;
  border-radius: 10px;
`;

export const Container = styled.div`
 background-color:#E1E2E6;
color:#fff;
width:50%;
height:800px;
grid-template-columns: auto auto;
margin:30px 10px;
display: grid;
grid-template-columns: 1;
position:fixed;
font-size:12px;
border-radius:10px;
overflow-y:scroll;
&::-webkit-scrollbar {
        background-color:#2b2b2b;
        }
    ::-webkit-scrollbar-thumb {
        background-color:#AFB2BB;
        
    }
    ::-webkit-scrollbar-track-piece {
      background-color:#E1E2E6;
    }
`;