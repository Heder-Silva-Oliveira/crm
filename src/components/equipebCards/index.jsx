import { Button, CardContent, CardHeader, CardStyle, Status, StatusCard, StatusCard2, CardBody } from "./styles"
import {ReactComponent as DeleteIcon} from './assets/delete.svg'
import {ReactComponent as EditIcon } from './assets/edit.svg'
import { useState } from "react"
import Modal from "./Modal"


const Card = ({ span1, span2, text}) => {

    const [openModal, setOpenModal] = useState(false)

    return (
    
            <CardStyle >
                <Status></Status>
                <CardContent>
                <CardHeader>
                    <StatusCard>
                        {span1}
                    </StatusCard>
                    <StatusCard2>
                        {span2}
                    </StatusCard2>
                    <div>
                        <Button onClick={() => setOpenModal(true)}
                            conteudo={"Deletar este usuario ?"}>
                            <DeleteIcon />
                        </Button>
                        <div>
                            <Modal isOpen={openModal}
                                setModalOpen={() => setOpenModal(!openModal)}>
                                    <p>Olá</p>
                            </Modal>     
                        </div>
                    </div>
                    <div>
                        <div>
                            <Button onClick={() => setOpenModal(true)}
                                conteudo={"Editar este usuario ?"}>
                                <EditIcon />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                    <CardBody>
                        {text}
                    </CardBody>
                </CardContent>
            </CardStyle>
        
    )
}

export default Card

