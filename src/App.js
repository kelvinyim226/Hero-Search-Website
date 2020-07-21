import React from "react";
import "./styles.css";
import Home from "./Home.js";
import Main from "./Main.js";
import SearchHero from "./SearchHero.js";
import NotFound from "./NotFound.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
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
        <Route exact path="/SearchHero">
          <SearchHero />
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
