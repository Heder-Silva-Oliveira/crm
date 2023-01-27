import React from 'react'
import { BackgroundStyle, ButtonClose, ModalStyle } from './styles'


const Modal = ({ isOpen, setModalOpen}) => {

  if ( isOpen ) {

  return (
    <BackgroundStyle>
        <ModalStyle>
            <ButtonClose onClick={setModalOpen}>
               <p>fechar</p>
            </ButtonClose>
        </ModalStyle>
    </BackgroundStyle>
  )
  }

  return null

}

export default Modal