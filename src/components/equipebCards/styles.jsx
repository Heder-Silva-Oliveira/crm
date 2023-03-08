import styled, {css} from "styled-components"

const CardStyle = styled.div`
    ${(props) => {
        switch (props.$mode) {
            case "Habilitado":
                return css`
                    border-left: 8px solid #00953b;
                `
            case "Desabilitado":
            return css`
                    border-left: 8px solid #771300;
                `
            case "Progresso":
                return css`
                    border-left: 8px solid #bb9600;
                `
            default:
                return css`
                    border-left: 8px solid #6e6b6b;
                `
        } 
    }}
    width: 95%;
    height: 100px;
    font-size: 12px;
    display: flex;
    background-color: white;
    border-radius: 8px;
    justify-self: center;
    margin: 5px;
    :hover {
        transition: 0,5s;
        opacity: 0.8;
    }
`

const CardContent = styled.div`
    width: 100%;
    padding: 5px;
`

const StatusCard = styled.div`
    ${(props) => {
        switch (props.$mode) {
            case "Habilitado":
                return css`
                    background-color: #00953b;
                `
            case "Desabilitado":
            return css`
                    background-color: #771300;
                `
            case "Progresso":
                return css`
                    background-color: #bb9600;
                `
            default:
                return css`
                    background-color: #6e6b6b;
                `
        } 
    }}
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
    StatusCard,
    StatusCard2,
    CardHeader,
    CardBody,
    Button,
    BackgroundStyle,
    ModalStyle,
    ButtonClose
}

