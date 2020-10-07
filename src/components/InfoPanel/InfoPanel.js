import * as React from "react";
import { useState } from "react";

import { Card, CardImg, CardImgOverlay, Fade } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { ButtonGroup, Button } from "reactstrap";
import { about as aboutText } from "../../text.json";
import { Progress } from "reactstrap";

import { ListGroup, ListGroupItem } from "reactstrap";
import Headshot from "../../res/headshot4.png";

const CompetenceContent = (
  <div>
    <ListGroup className="competenceParentList">
      <ListGroupItem className="competenceSection">
        <span className="sectionText">DAWs</span>
        <Progress value={90} color="dark" className="progressBar">
          <span className="progressText">Cubase</span>
        </Progress>
        <Progress value={90} color="dark" className="mt-2 progressBar">
          <span className="progressText">FL Studio</span>
        </Progress>
        <Progress value={20} color="dark" className="mt-2 progressBar">
          <span className="progressText">Pro Tools</span>
        </Progress>
        <Progress value={18} color="dark" className="mt-2 progressBar">
          <span className="progressText">Ableton</span>
        </Progress>
      </ListGroupItem>
      <ListGroupItem className="competenceSection">
        <span className="sectionText">Middleware</span>
        <Progress value={10} color="dark" className="progressBar">
          <span className="progressText">Wwise</span>
        </Progress>
        <Progress value={10} color="dark" className="mt-2 progressBar">
          <span className="progressText">Fmod</span>
        </Progress>
      </ListGroupItem>
      <ListGroupItem className="competenceSection">
        <span className="sectionText">Other</span>
        <Progress value={57} color="dark" className="progressBar">
          <span className="progressText">Sibelius</span>
        </Progress>
      </ListGroupItem>
    </ListGroup>
  </div>
);

const InfoPanel = () => {
  const [fadeInAbout, setFadeInAbout] = useState(false);
  const [fadeInCompe, setFadeInCompe] = useState(false);

  const toggleAbout = () => {
    setFadeInAbout(!fadeInAbout);
    setFadeInCompe(false);
  };

  const toggleCompe = () => {
    setFadeInCompe(!fadeInCompe);
    setFadeInAbout(false);
  };

  const closeBtnAbout = (
    <button className="close xButton" onClick={toggleAbout}>
      &times;
    </button>
  );

  const closeBtnCompe = (
    <button className="close xButton" onClick={toggleCompe}>
      &times;
    </button>
  );

  return (
    <Card className="h-100 w-100 justify-content-center align-items-center text-center cardView">
      <div>
        <CardImg top className="roundHeadshot " src={Headshot} alt="Card image cap" />
        {useMediaQuery({ query: "(max-width: 992px)" }) ? (
          <div>
            <Modal isOpen={fadeInAbout} toggle={toggleAbout} contentClassName="aboutModal">
              <ModalHeader toggle={toggleAbout} close={closeBtnAbout}>
                <span className="infoText">About</span>
              </ModalHeader>
              <ModalBody className="modalBody">{aboutText}</ModalBody>
            </Modal>
            <Modal isOpen={fadeInCompe} toggle={toggleCompe} contentClassName="aboutModal">
              <ModalHeader toggle={toggleCompe} close={closeBtnCompe}>
                <span className="infoText">Competence</span>
              </ModalHeader>
              <ModalBody className="modalBody">{CompetenceContent}</ModalBody>
            </Modal>
          </div>
        ) : (
          <div>
            <Fade in={fadeInAbout} className="">
              <CardImgOverlay className="aboutOverlay">
                <div className="fadeBody">{aboutText}</div>
              </CardImgOverlay>
            </Fade>
            <Fade in={fadeInCompe} className="">
              <CardImgOverlay className="aboutOverlay">
                <div className="fadeBody">{CompetenceContent}</div>
              </CardImgOverlay>
            </Fade>
          </div>
        )}
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
          outline={!fadeInCompe}
          className="infoButton w-100 h-100 text-white"
          onClick={toggleCompe}
        >
          <span className="lowerButtonText">Competence</span>
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default InfoPanel;