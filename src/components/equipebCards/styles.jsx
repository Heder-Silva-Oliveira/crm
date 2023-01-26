import styled from "styled-components"

const CardStyle = styled.div`
    width: 100%;
    height: 100px;
    font-size: 12px;
    display: flex;
    background-color: white;
    border-radius: 8px;
    justify-self: center;
`


const CardContent = styled.div`
    width: 100%;
    padding: 5px;
`

const Status = styled.div`
    width: 8px;
    border-radius: 8px 0 0 8px;
    background-color: #67b769;
`
const StatusCard = styled.div`
    background-color: #67b769;
    border-radius: 16px;
    padding: 3px;
`

const StatusCard2 = styled.div`
    background-color: #6893B9;
    border-radius: 16px;
    padding: 3px;
`

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 25%;
`

const CardBody = styled.div`
    justify-content: center;
    height: 75%;
    align-items: center;
    display: flex;
`

const Button = styled.button`
    background-color: white;
    border-color: white;
    border: none;
    cursor: pointer;
`

const ModalStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 150px;
    background-color: #fff;
    border-radius: 10px;
`

const BackgroundStyle = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0, 0.3);
    z-index: 10;
`

const ButtonClose = styled.button`
    border: none;
    cursor: pointer;
    display: flex;
    margin: 0;
`


export {
    CardStyle,
    CardContent,
    Status,
    StatusCard,
    StatusCard2,
    CardHeader,
    CardBody,
    Button,
    BackgroundStyle,
    ModalStyle,
    ButtonClose
}

