import styled from "styled-components";

export const H1 = styled.h1 `
    color: #4b4bc2;
    text-align: center;
    margin-bottom: 16px;
`
export const H2 = styled.h2 `
    color: #fff;
    margin: 16px 0 16px 0 ;
`

export const Section = styled.section`
    background-color: #fff;
    border-left: 1em solid orange;
    margin:7px;
    margin-bottom: 5px;
    padding:1px;
    border-radius: 20px;
    height: 150px;
    width: 20px;
    text-align: center;
    flex-basis: calc(45% - 7px);
`;


export const DivPage = styled.div`
    width: 100%;
    border: 2px blue solid;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
`;

export const DivSubject = styled.div`
    height: 800px;
    width: 631px;
    border: 2px red solid;
    border-radius: 8px;
    position:relative;
    margin-left: 10px;
    flex-shrink: 0;
    background-color: #f6f0f0;
`;


export const Div = styled.div`
    background-color: #eee6e6;
    border: black solid;
    border-radius: 20px;
    height: 800px;
    width: 592px;
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    position:relative;
    box-sizing: border-box;
`;

export const DivSidebar = styled.div`
    height: 800px;
    width: 100px;
    background-color: #383636;
    border: 2px red solid;
    position: relative;
    box-sizing: border-box;
    display: inline-block;
`;
