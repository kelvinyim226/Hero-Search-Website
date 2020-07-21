import React, { useEffect, useState }  from "react";
import "./styles.css";
import From from "./form.js";
import fetchData from "./fetch.js";
import SearchHero from "./SearchHero.js";
import HeroCard from "./heroCard.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from 'react-router-dom'
import { array } from "js-md5";



function Main() {
    const popularHeroNames = ['thor', 'iron man', 'black widow',
                            'captain america', 'hulk']
    const [popularHeroData, setPopularHeroData] = React.useState(null)
    const [heroName, setHeroName] = React.useState(null)
    const [heroData, setHeroData] = React.useState(null)
    let heroCollection = []

    const functionWithPromise = item => { 
        return Promise.resolve('ok')
      }
    const anAsyncFunction = async item => {
        return fetchData(item)
      }
      
    const getData = async () => {
        return Promise.all(popularHeroNames.map(item => anAsyncFunction(item)))
      }
    useEffect(() => {
        getData().then(data => {
            setPopularHeroData(data)
          })

    },[])

    async function handleSubmit(heroName) {
        setHeroName(heroName)
        const heroApi = await fetchData(heroName)
        setHeroData(heroApi)
      }

    
    return (
        <div className="home">
            <h1>{heroName?'Result':'Popular Hero'}</h1>
        
        <From onSubmit={handleSubmit} />
        {heroName?
        <SearchHero heroData={heroData} heroName={heroName}/>
        :
            <div style={{display:'flex',alignItems:'flex-start',margin:'10px'}}>
            {popularHeroData? 
                popularHeroData.map((heroData, index) =>{
                    return (<HeroCard key={index} heroData={heroData} heroDescription={true} />)
                })

            :<div/>
            }    
        </div>
        }
        </div>
    )
  }

 
  export default Main