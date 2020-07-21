import React from "react";
import "./components/styles/styles.css";
import Home from "./components/Home.js";
import Main from "./components/Main.js";
import NotFound from "./components/NotFound.js";
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
