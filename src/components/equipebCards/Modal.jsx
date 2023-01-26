import React from 'react'
import { BackgroundStyle, ModalStyle, ButtonClose } from './styles'

const Modal = ({ isOpen, setModalOpen, children}) => {

  if ( isOpen ) {

  return (
    <BackgroundStyle>
        <ModalStyle>
            { children }
            <ButtonClose onClick={setModalOpen}>
                <p>Fechar</p>
            </ButtonClose>
        </ModalStyle>
    </BackgroundStyle>
  )
  }

  return null

}

export default Modal