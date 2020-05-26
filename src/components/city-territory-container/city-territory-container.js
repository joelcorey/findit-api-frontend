import React, { useState, useEffect } from 'react';
import './city-territory-container.css';

const CityTerritoryContainer = (props) => {

    //const [ jobs, setJobs ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    // list of all cities in state, used to build category links per city
    const [ cityLinks, setCityLinks ] = useState();
    // Actual url's and other data of jobs
    const [ cityLinksWithCategories, setCityLinksWithCategories ] = useState();
    const [ jobLinks, setJobLinks ] = useState()
   
    let getCitiesInState = props.useFetch('http://localhost:8000/cities/links',
    {
        method: 'POST',
        body: JSON.stringify({ state: props.territory }),
        headers: {"Content-Type": "application/json"}
    });

    function categoryHelper() {
        let categories = props.categories;
        let newCityLinks = [];
        let newCityLink = {};

        cityLinks.map(cityLink => {
            categories.map(category => {
                newCityLink.city_url = `${cityLink.city_url}${category}`
                newCityLink.city_name = cityLink.city_name;
                newCityLink.territory_name = cityLink.territory_name;
                newCityLink.city_country = cityLink.city_country;
                newCityLink.category = category;
                newCityLinks.push(newCityLink);
                newCityLink = {};
            })
        })
        return newCityLinks;
    }
    
    useEffect(() => {
        setCityLinks(getCitiesInState.response);
    })

    useEffect(() => {
        // add categories to newCityLinks
        if(cityLinks) {
            setCityLinksWithCategories(categoryHelper());
            setLoading(false);
        }
        // make cityLinks = newCityLinks
    }, [cityLinks])

    if(!loading) {
        return (
            <div className="city-territory-container" key={props.index}>
                <div className="city-territory-container-header">
                    <div className="city-territory-container-item">{props.territory}</div>
                    <div className="city-territory-container-item">city count: {props.cityCount}</div>
                </div>
                <div className="city-territory-container-column">

                    {}

                </div>
            </div>
        )
    }
    return (
        <div className="city-territory-container" key={props.index}>
            <div className="city-territory-container-header">
                <div className="city-territory-container-loading" />
                <div className="city-territory-container-item">{props.territory}</div>
                <div className="city-territory-container-item">city count: {props.cityCount}</div>
            </div>
        </div>
    )
    
}


export default CityTerritoryContainer;