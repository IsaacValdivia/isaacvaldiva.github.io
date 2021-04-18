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
            <div className="topBar d-flex flex-column justify-content-start">
              <div>
                <Link to="/audio" className="linkSection">
                  <div>
                    AUDIO
                    <GiOcarina className="topBarIcon ml-1" />
                  </div>
                </Link>
                <Link to="/programming" className="linkSection">
                  PROGRAMMING
                  <GiProcessor className="topBarIcon ml-2" />
                </Link>
              </div>
            </div>
            <Switch>
              <Route path="/" exact>
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
        <div className="lowerZone d-flex flex-row justify-content-between text-white">
          <span className="lowerText">© 2021 Isaac Valdivia</span>
          <a
            href="javascript:location='mailto:\u0069\u0073\u0061\u0061\u0063\u002e\u0076\u0061\u006c\u0064\u0069\u0076\u0069\u0061\u002e\u0061\u0075\u0064\u0069\u006f\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0"
            className="lowerText"
          >
            isaac.valdivia.audio<code>@</code>gmail.com
          </a>
        </div>
      </div>
    );
  }
}

export default App;
