import React from "react";
import "./styles.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from 'react-router-dom'
  
function Home() {
    return (
        <div className="home">
        <div className="imgThumb">
        <Link className="homePageLogo" to='/Main'>
        <img className="logo" src="./images/Marvel_logo.png" alt="marvel-logo"></img>
        </Link>
        </div>
        </div>
    )
  }
  export default Home