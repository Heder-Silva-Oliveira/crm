import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  width: 40vw;
  display: grid;
  grid-template-columns: 40% 60%;
  align-content: flex-start;
  background: rgba(237, 66, 66, 0.8);
  position: relative;
  margin-top: 20px;
  grid-row: 2;
  margin-right: 500px;
  border-radius: 8px;
  margin-bottom: 20px;
  @media (max-width: 1400px) {
    background: rgba(28, 24, 24, 0.8);
  }
`;
export const DivContainer = styled.div`
  margin-left: 1vw;
  margin-top: 1vh;
  width: 200px;
  height: 30px;
  margin-left: 2px;
  background-color: #ffff;
  border-radius: 8px;
  border: 1px solid #888c95;

  :hover {
    background-color: aliceblue;
  }
`;
export const DivSelect = styled.div`
  display: ${(props) => props.open || "none"};
  ${(props) => props.open};
  width: 98%;
  height: fit-content;
  background-color: #d3d3d3;
  padding-bottom: 5px;
  padding-left: 2px;
  padding-right: 2px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid gray;
  padding-top: 30px; //tem que ser mesma altura do divcontainer
`;
export const Options = styled.h4`
  display: ${(props) => props.open};
  background-color: #ffff;
  padding-left: 8%;
  height: 3%;
  :hover {
    cursor: pointer;
    background-color: #dde4e4;
  }
`;
export const DivTAgs = styled.div`
  white-space: normal;
  background-color: #ffff;
  border-radius: 8px;
  border: 1px solid #888c95;
  grid-column: 2;
  width: 85%;
  height: 15vh;
`;
export const Tag = styled.label`
  background-color: #ffff;
  width: fit-content;
  height: fit-content;
  margin-left: 5px;
`;
