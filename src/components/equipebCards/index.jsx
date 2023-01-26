import { Button, CardContent, CardHeader, CardStyle, StatusCard, StatusCard2, CardBody } from "./styles"
import {ReactComponent as DeleteIcon} from './assets/delete.svg'
import {ReactComponent as EditIcon } from './assets/edit.svg'
import { useState } from "react"
import Modal from "../equipeBModal"



const Card = ({ span1, span2, text}) => {

    const [openModal, setOpenModal] = useState(false)

    return (
    
            <CardStyle $mode={span1}>
                <CardContent>
                <CardHeader>
                    <StatusCard $mode={span1}>
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
                            <Modal isOpen={openModal}setModalOpen={() => setOpenModal(!openModal)}>
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

