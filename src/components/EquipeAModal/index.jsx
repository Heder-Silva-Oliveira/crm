import React from 'react'
import { ModalBack, ModalDiv } from './styles'

const Modal = ({isOpen, icon}) => {
 if(isOpen === "true"){
    return (
      <ModalBack>
        
        <ModalDiv>
          
        </ModalDiv>
          <div>
            {icon}
          </div>
       
      
      </ModalBack>
    )

 }
 return null

}

export default Modal