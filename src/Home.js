import React from "react";
import "./styles/styles.css";
import {
    Link,
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