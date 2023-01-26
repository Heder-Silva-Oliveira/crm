import styled from  "styled-components"

const BoardStyle = styled.div`
    width: 590px;
    height: 797px;
    display: grid;
    align-content: flex-start;
    background-color: #16191E;
    border-radius: 10px;
    margin-left: 100px;
    grid-template-columns: 49% 49%;
    gap: 2%;
    padding: 10px;
    overflow: auto;
`
const MainStyle = styled.div`
    h1{
        color: purple;
    }
`

export {
    MainStyle,
    BoardStyle
}


