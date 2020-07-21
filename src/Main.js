import React, { useEffect }  from "react";
import "./styles/styles.css";
import From from "./components/form.js";
import fetchData from "./fetch.js";
import SearchHero from "./components/SearchHero.js";
import HeroCard from "./components/heroCard.js";



function Main() {
    const popularHeroNames = ['thor', 'iron man', 'black widow',
                            'captain america', 'hulk']
    const [popularHeroData, setPopularHeroData] = React.useState(null)
    const [heroName, setHeroName] = React.useState(null)
    const [heroData, setHeroData] = React.useState(null)

   
    const anAsyncFunction = async item => {
        return fetchData(item)
      }
      
    const getData = async () => {
        return Promise.all(popularHeroNames.map(item => anAsyncFunction(item)))
      }
    const clearData = () => {
        console.log('yes')
        setHeroName(null)
        setHeroData(null)
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
        
          <From onSubmit={handleSubmit} styles={{margin:'10px',color:'white'}}/>
          {heroName?
          <div>
            <SearchHero heroData={heroData} heroName={heroName}/>
            <div onClick={clearData} className="backBtn">Back-></div>
          </div>
          :
            <div className="mainContainer">
              {popularHeroData? 
              popularHeroData.map((heroData, index) =>{
              return (
              <HeroCard key={index} heroData={heroData} heroDescription={true} />)
              })
              :<div/>
              }    
          </div>
          }
        </div>
    )
  }

 
  export default Main