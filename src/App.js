import React, { useState } from "react";
import { ButtonGroup, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Card, CardImg, CardImgOverlay } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { GiOcarina, GiProcessor, GiMinerals, GiViolin, GiSoundWaves, GiSaxophone, GiQuillInk, GiPianoKeys } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import Node from "./components/Node";
import './App.css';
import Headshot from "./res/headshot.jpg"
import './constants/Constants';
import { mediaBreakpoint } from "./constants/Constants";



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
                <Card className="h-100 w-100 justify-content-center align-items-center text-center cardView">
                  <CardImg top className="roundHeadshot" src={Headshot} alt="Card image cap" />
                  <CardImgOverlay className="d-flex flex-row justify-content-around"></CardImgOverlay>
                  <ButtonGroup
                    vertical={useMediaQuery({ query: "(max-width: 992px)" })}
                    className="w-100 pt-1 headshotButtons justify-content-center align-items-center"
                  >
                    <Button outline className="w-100 h-100 text-white">
                      <span>About</span>
                    </Button>
                    <Button outline className="w-100 h-100 text-white">
                      <span>Competence</span>
                    </Button>
                  </ButtonGroup>
                </Card>
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