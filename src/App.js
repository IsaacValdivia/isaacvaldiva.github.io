import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Audio from "./Audio";
import Programming from "./Programming";
import { GiOcarina, GiProcessor } from "react-icons/gi";
import { ButtonGroup, Button, Text } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div>
          <Router>
            <div className="d-flex flex-row justify-content-between topBar">
              <Link to="/audio">
                <div>
                  AUDIO
                  <GiOcarina className="topBarIcon" />
                </div>
              </Link>
              <Link to="/programming">
                <GiProcessor className="topBarIcon pr-1" />
                PROGRAMMING
              </Link>
            </div>
            <Switch>
              <Route path="/">
                <Audio />
              </Route>
              <Route path="/programming">
                <Programming />
              </Route>
              <Route path="/audio">
                <Audio />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
