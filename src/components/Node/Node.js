import React from "react";
import { Button } from "reactstrap";
import "./Node.css";

const Node = props => {
  let buttonStyle = "btn-ripple rounded-circle ";
  let size;
  if (props.disabled) {
    buttonStyle += "disabledButton";
    size = "sm";
  } else {
    buttonStyle += "roundButton";
    size = "md";
  }
  return (
    <Button
      className={buttonStyle}
      disabled={props.disabled}
      size={size}
    >
      <div className="d-flex flex-column justify-content-center align-items-center responsiveText">
        {props.disabled ? "" : props.title}
        {props.disabled ? "" : props.icon}
      </div>
    </Button>
  );
}

export default Node;