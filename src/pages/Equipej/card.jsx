import React  from "react";

const Card = (props) => {
    return(
      <div>
        <div>{props.nome}</div>
        <div>{props.email}</div>
        <div>{props.deleteButton}</div>
      </div>
    )
  }
export default Card;