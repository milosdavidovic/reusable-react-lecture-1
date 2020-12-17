import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Children from "./components/Children/Children";
import Props from "./components/Props/Props";
import RenderProps from "./components/RenderProps/RenderProps";
import Sockets from "./components/Sockets/Sockets";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/props">Props</Link>
            </li>
            <li>
              <Link to="/children">Children</Link>
            </li>
            <li>
              <Link to="/sockets">Sockets</Link>
            </li>
            <li>
              <Link to="/renderprops">Render props</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/props">
            <Props />
          </Route>
          <Route path="/children">
            <Children />
          </Route>
          <Route path="/sockets">
            <Sockets />
          </Route>
          <Route path="/renderprops">
            <RenderProps />
          </Route>
          <Redirect to="/props" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
