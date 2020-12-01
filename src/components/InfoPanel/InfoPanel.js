import * as React from "react";
import { useState } from "react";

import { Card, CardImg } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { ButtonGroup, Button } from "reactstrap";
import { about as aboutText } from "../../text.json";

import "./InfoPanel.css";

import { FaYoutube } from "react-icons/fa";
import Headshot from "../../res/headshot4.png";

const Contact = (
  <div className="d-flex flex-column justify-content-start align-items-center text-center contactDiv">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <a href="http://www.youtube.com/c/IsaacValdivia" class="fa fa-youtube mt-3"></a>
    <a href="https://twitter.com/IsaacValdivia_" class="fa fa-twitter mt-3"></a>
    <a href="https://www.linkedin.com/in/isaac-valdivia-l%C3%B3pez-349353195/" class="fa fa-linkedin mt-3"></a>
    <a
      href="javascript:location='mailto:\u0069\u0073\u0061\u0061\u0063\u002e\u0076\u0061\u006c\u0064\u0069\u0076\u0069\u0061\u002e\u0061\u0075\u0064\u0069\u006f\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0"
      className="fa fa-at mt-3"
    ></a>
    <a href="https://docdro.id/Gwhg1Qz" class="mt-3">
      Audio CV
    </a>
    <a href="https://docdro.id/tIOqUFi" class="mt-3">
      Programming CV
    </a>
  </div>
);

const InfoPanel = () => {
  const [fadeInAbout, setFadeInAbout] = useState(false);
  const [fadeInContact, setFadeInContact] = useState(false);

  const toggleAbout = () => {
    setFadeInAbout(!fadeInAbout);
    setFadeInContact(false);
  };

  const toggleContact = () => {
    setFadeInContact(!fadeInContact);
    setFadeInAbout(false);
  };

  const closeBtnAbout = (
    <button className="close xButton" onClick={toggleAbout}>
      &times;
    </button>
  );

  const closeBtnContact = (
    <button className="close xButton" onClick={toggleContact}>
      &times;
    </button>
  );

  return (
    <Card className="h-100 w-100 justify-content-center align-items-center text-center cardView">
      <div className="w-100">
        <CardImg top className="roundHeadshot" src={Headshot} alt="Card image cap" />
        <div>
          <Modal size="lg" isOpen={fadeInAbout} toggle={toggleAbout} contentClassName="aboutModal">
            <ModalHeader toggle={toggleAbout} close={closeBtnAbout}>
              <span className="infoText">About</span>
            </ModalHeader>
            <ModalBody className="modalBody">{aboutText}</ModalBody>
          </Modal>
          <Modal size="sm" isOpen={fadeInContact} toggle={toggleContact} contentClassName="aboutModal">
            <ModalHeader toggle={toggleContact} close={closeBtnContact}>
              <span className="infoText">Contact</span>
            </ModalHeader>
            <ModalBody className="modalBody contactBody">{Contact}</ModalBody>
          </Modal>
        </div>
      </div>

      <ButtonGroup
        vertical={useMediaQuery({ query: "(max-width: 992px)" })}
        className="w-100 pt-1 headshotButtons justify-content-center align-items-center"
      >
        <Button
          type="button"
          outline={!fadeInAbout}
          className="infoButton w-100 h-100 text-white"
          onClick={toggleAbout}
        >
          <span className="lowerButtonText">About</span>
        </Button>
        <Button
          type="button"
          outline={!fadeInContact}
          className="infoButton w-100 h-100 text-white"
          onClick={toggleContact}
        >
          <span className="lowerButtonText">Contact</span>
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default InfoPanel;