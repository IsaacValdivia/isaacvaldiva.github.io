import React from "react";
import { Container, Row, Col } from "reactstrap";
import InfoPanel from "../InfoPanel";

import "./NodePanel.css";

const NodePanel = (props) => {
  return (
    <div className="d-flex flex-column justify-content-start mainView">
      <Container fluid className="d-flex flex-column justify-content-around">
        <Row className="rowOfNodes">
          <Col className="d-flex flex-column justify-content-center align-items-center">{props.nodeList[0]}</Col>
          <Col xs={5} className="d-flex flex-column justify-content-center align-items-center">
            {props.nodeList[1]}
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">{props.nodeList[2]}</Col>
        </Row>
        <Row>
          <Col className="h-100 d-flex flex-column justify-content-center align-items-center">{props.nodeList[3]}</Col>
          <Col xs={5} className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <InfoPanel />
          </Col>
          <Col className="h-100 d-flex flex-column justify-content-center align-items-center">{props.nodeList[4]}</Col>
        </Row>
        <Row className="rowOfNodes">
          <Col className="d-flex flex-column justify-content-center align-items-center">{props.nodeList[5]}</Col>
          <Col xs={5} className="d-flex flex-column justify-content-center align-items-center">
            {props.nodeList[6]}
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">{props.nodeList[7]}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default NodePanel;