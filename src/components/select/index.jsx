import React, { useState } from "react";
import {
  Container,
  DivContainer,
  DivSelect,
  Options,
  DivTAgs,
  Tag,
} from "./styles";

function Select() {
  const options = [
    {
      id: 1,
      label: "op1",
    },
    {
      id: 2,
      label: "op2",
    },
    {
      id: 3,
      label: "op3",
    },
  ];
  const [openSelect, setOpenSelect] = useState();
  const [select, setSelect] = useState([]);
  const showOption = () => {
    setOpenSelect("block");
  };

  //função pega selecionado
  const showTags = (props) => {
    const newArray = options.filter((options) => options.id === props);
    setSelect([...select, newArray]);
    console.log(select);
  };
  //fin função

  //função pasiva close options
  const changeHandler = (e) => {
    setOpenSelect("none");
  };
  document.addEventListener("mouseup", function (event) {
    var obj = document.getElementById("aqui");
    if (!obj.contains(event.target)) {
      changeHandler();
    } else {
    }
  });
  //fim função
  return (
    <>
      <Container>
        <DivContainer onClick={showOption}>
          <DivSelect open={openSelect}>
            {options.map((item) => (
              <Options id="aqui" onClick={(e) => showTags(item.id)}>
                {item.label}
              </Options>
            ))}
          </DivSelect>
        </DivContainer>
        <DivTAgs>
          {select.map((item) => (
            <Tag>{item[0].label}</Tag>
          ))}
        </DivTAgs>
      </Container>
    </>
  );
}

export default Select;
