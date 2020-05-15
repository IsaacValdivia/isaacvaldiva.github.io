import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Node.css";

const Node = (props) => {

  let buttonStyle = "btn-ripple rounded-circle ";
  let size;
  if (props.disabled) {
    buttonStyle += "disabledButton";
    size = "sm";
  } else {
    buttonStyle += "roundButton";
    size = "md";
  }

  let modalClass = "modalContainer unfoldIn";
  const [modal, setModal] = useState(false);

  const toggle = () => {
    if (!modal) {
      modalClass = "modalContainer unfoldIn";
    } else {
      modalClass = "modalContainer unfoldOut";
    }
    setModal(!modal);
  } 

  return (
    <div>
      <Button className={buttonStyle} disabled={props.disabled} size={size} onClick={toggle}>
        <div className="d-flex flex-column justify-content-center align-items-center responsiveContent">
          {props.disabled ? "" : props.title}
          <span className="responsiveIcon">{props.disabled ? "" : props.icon}</span>
        </div>
      </Button>
      <Modal centered isOpen={modal} toggle={toggle} className={modalClass}>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/7QZ6S6tfF78"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Node;