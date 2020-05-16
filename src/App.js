import React, { useState } from "react";
import { ButtonGroup, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardFooter, CardBody, Fade, Progress } from "reactstrap";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { GiOcarina, GiProcessor, GiMinerals, GiViolin, GiSoundWaves, GiSaxophone, GiQuillInk, GiPianoKeys } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import Node from "./components/Node";
import './App.css';
import Headshot from "./res/headshot.jpg"
import './constants/Constants';
import { mediaBreakpoint } from "./constants/Constants";
import { about as aboutText } from "./text.json";


const METAL_ICON = <GiMinerals />;
const ORCHESTRA_ICON = <GiViolin />;
const ORCHESTRA_CALM_ICON = <GiOcarina />;
const ORCHESTRA_INTENSE_ICON = <GiOcarina />;
const ELECTRONIC_ICON = <GiSoundWaves />;
const ELECTRONIC_CALM = <GiOcarina />;
const ELECTRONIC_INTENSE = <GiOcarina />;
const CHAMBER_ICON = <GiQuillInk />;
const JAZZ_ICON = <GiSaxophone />;
const PERFORMANCE_ICON = <GiPianoKeys />;


const TOP_LEFT = <Node title="Metal&Rock" icon={METAL_ICON} />;
const TOP_CENTER = <Node title="Orchestral" icon={ORCHESTRA_ICON} />;
const TOP_RIGHT = <Node title="Electronic" icon={ELECTRONIC_ICON} />;
const MID_RIGHT = <Node title="Chamber" icon={CHAMBER_ICON} />;
const MID_LEFT = <Node title="Jazz" icon={JAZZ_ICON} />;
const BOT_LEFT = <Node title="Metal" icon={METAL_ICON} disabled/>;
const BOT_CENTER = <Node title="Performance" icon={PERFORMANCE_ICON} />;
const BOT_RIGHT = <Node title="Metal" icon={METAL_ICON} disabled/>;

let lang = "EN";

const CompetenceContent = (
  <div>
    <ListGroup className="competenceParentList">
      <ListGroupItem className="competenceSection">
        <span>DAWs</span>
        <Progress animated value={90} color="dark" className="progressBar">
          <span className="progressText">Cubase</span>
        </Progress>
        <Progress animated value={90} color="dark" className="mt-2 progressBar">
          <span className="progressText">FL Studio</span>
        </Progress>
        <Progress animated value={20} color="dark" className="mt-2 progressBar">
          <span className="progressText">Pro Tools</span>
        </Progress>
        <Progress animated value={18} color="dark" className="mt-2 progressBar">
          <span className="progressText">Ableton</span>
        </Progress>
      </ListGroupItem>
      <ListGroupItem className="competenceSection">
        <span>Middleware</span>
        <Progress animated value={10} color="dark" className="progressBar">
          <span className="progressText">Wwise</span>
        </Progress>
        <Progress animated value={10} color="dark" className="mt-2 progressBar">
          <span className="progressText">Fmod</span>
        </Progress>
      </ListGroupItem>
      <ListGroupItem className="competenceSection">
        <span>Other</span>
        <Progress animated value={57} color="dark" className="progressBar">
          <span className="progressText">Sibelius</span>
        </Progress>
      </ListGroupItem>
    </ListGroup>
  </div>
);

const LanguagePicker = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!dropdownOpen);
  }

  const setLanguage = (_lang) => {
    lang = _lang;
  }

   return (
     <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
       <DropdownToggle caret>{lang}</DropdownToggle>
       <DropdownMenu right>
         <DropdownItem onClick={() => setLanguage("EN")}>EN</DropdownItem>
         <DropdownItem divider />
         <DropdownItem onClick={() => setLanguage("ES")}>ES</DropdownItem>
       </DropdownMenu>
     </ButtonDropdown>
   );
};

const InfoPanel = props => {
  const [fadeInAbout, setFadeInAbout] = useState(false);
  const [fadeInCompe, setFadeInCompe] = useState(false);

  const toggleAbout = () => {
    setFadeInAbout(!fadeInAbout);
    setFadeInCompe(false);
  } 

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
          <CardImg top className="roundHeadshot" src={Headshot} alt="Card image cap" />
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

const App = () => {
    return (
      <div>
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div className=" d-flex flex-column justify-content-start mainView">
          <div className="d-flex flex-row justify-content-between topBar">
            <ButtonGroup size={useMediaQuery({ query: "(max-width: " + mediaBreakpoint + "px )" }) ? "sm" : "md"}>
              <Button>
                <GiOcarina className="topBarIcon" />
                AUDIO
              </Button>
              <Button outline>
                <GiProcessor className="topBarIcon pr-1" />
                PROGRAMMING
              </Button>
            </ButtonGroup>

            <LanguagePicker />
          </div>

          <Container fluid className="mainCont h-100 d-flex flex-column justify-content-around">
            <Row className="">
              <Col className="d-flex flex-column justify-content-center align-items-center">{TOP_LEFT}</Col>
              <Col xs={5} className="d-flex flex-column justify-content-center align-items-center">
                {TOP_CENTER}
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">{TOP_RIGHT}</Col>
            </Row>
            <Row className=" d-flex flex-row align-items-center">
              <Col className="h-100 d-flex flex-column justify-content-center align-items-center">{MID_LEFT}</Col>
              <Col xs={5} className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <InfoPanel/>
              </Col>
              <Col className="h-100 d-flex flex-column justify-content-center align-items-center">{MID_RIGHT}</Col>
            </Row>
            <Row className="">
              <Col className="d-flex flex-column justify-content-center align-items-center">{BOT_LEFT}</Col>
              <Col xs={5} className="d-flex flex-column justify-content-center align-items-center">
                {BOT_CENTER}
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">{BOT_RIGHT}</Col>
            </Row>
          </Container>
        </div>
        <div className="lowerZone d-flex flex-row justify-content-between text-white">
          <span className="lowerText">© 2020 Isaac Valdivia</span>
          <span className="lowerText">isaac.valdivia.audio@gmail.com</span>
        </div>
      </div>
    );
};

export default App;