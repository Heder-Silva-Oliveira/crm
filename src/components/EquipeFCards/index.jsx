import React, { useState } from "react";
import {FaRegEdit, FaTrash} from 'react-icons/fa';
import { Card, H1, H2, Editar, H3, Deletar, Button, Section, Button1 } from "./styles";
import Modal from "../EquipeFModal";



const Contents = (props) => {
const { id, tag, name, status } = props;
const [openModal, setOpenModal] = useState(false)


        return (
    <>


<Card>
    <H1>{id}</H1>
    <Editar>
        <Button1 onClick={() => setOpenModal(true)}><FaRegEdit /></Button1>
</Editar>


<Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
PAGAMENTOS OPERAÇÕES E OBRIGAÇÕES FISCAIS
</Modal>

<Deletar><FaTrash />
</Deletar>

<H2>{tag}</H2> 
<H3>{name}</H3>


<Button>{status}</Button>
</Card>

    </>
        )
}



export default Contents;