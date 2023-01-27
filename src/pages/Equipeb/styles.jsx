import styled from  "styled-components"

const BoardStyle = styled.div`
    width: 590px;
    height: 797px;
    display: grid;
    align-content: flex-start;
    background-color: #16191E;
    border-radius: 10px;
    margin-left: 200px;
    position: absolute;
    grid-template-columns: 49% 49%;
    gap: 2%;
    padding: 10px;
    overflow: auto;

    &::-webkit-scrollbar{
        border: 10px solid aquamarine;
        width: 10px;
        height: 10px;
    }

    &::-webkit-scrollbar-track{
         box-shadow: 5px black;
         border-radius: 10px;
    }

    &::-webkit-scrollbar-track-piece{
        background-color: #16191E;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #bebebe;
        border-radius: 10px;
    }

`

const MainStyle = styled.div`
    h1{
        color: purple;
    }
`

const Label = styled.label`
    font-size: 20px;
    margin-left: 205px;
    color: black;
`

export {
    MainStyle,
    BoardStyle,
    Label
}


