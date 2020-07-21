import React from "react";


function HeroCard({heroData,heroDescription,styles}){
    const hero = heroData || '';
    const {description = '' , thumbnail = '' , name = ''} = hero
    const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
    return(
      <div style={Styles.heroContainer}>
          {heroData?
        <div>
            <img style={Styles.heroImage} src={imageUrl} alt='heroImage'/>
            <div style={Styles.heroName}>{name}</div>
            {!heroDescription?
            <div style={Styles.heroDescription}>{description?description:'Unknown'}</div>
            :<div/>
            }
        </div>:
        <div/>
          }
      </div>
      
    )

    
  }
  const Styles = {
    heroContainer: {
      width: "30%",
      border:'5px solid black',
      padding:'10px',
      margin: 'auto',

    },
     heroImage: {
      width: "100%",
      objectFit:'cover',
    },
    heroName: {
        fontFamily: 'fantasy',
        fontSize: 'x-large',
        fontWeight: 'bold',
        color: 'white',
    },
    heroDescription: {
        fontFamily: 'fantasy',
        color: 'white',
    }
  }

  export default HeroCard
