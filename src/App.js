import React from "react";
import "./styles.css";
import Home from "./Home.js";
import Main from "./Main.js";
import NotFound from "./NotFound.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Main">
          <Main />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}


export default function App() {



  return (
    <Routes />

  );
}
