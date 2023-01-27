import styled from 'styled-components'

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
    ButtonClose,
    BackgroundStyle,
    ModalStyle
}