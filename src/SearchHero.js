import React from "react";
import "./styles.css";
import HeroCard from "./heroCard.js";

function SearchHero({heroData,heroName}) {

  
   
    return (
        <div >
        {heroData?
            <HeroCard heroData={heroData} />
        :heroData === false ?
        <div style={Styles.error}>Cannot find {heroName}. Please enter a valid hero name.
        </div>
        :<div/>
        }
        </div>
    )
  }

  const Styles = {
      home: {
      },
      submitBtn: {
        padding: '20px'
      },
      error: {
          color: 'red',
 
      }
  }
  export default SearchHero