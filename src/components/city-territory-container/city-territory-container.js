import React, { useState, useEffect } from 'react';
import './city-territory-container.css';

import ResultInfo from '../result-info/result-info';

const CityTerritoryContainer = (props) => {

    //const [ jobs, setJobs ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    // list of all cities in state, used to build category links per city
    const [ cityLinks, setCityLinks ] = useState([]);
    // Actual url's and other data of jobs
    const [ jobLinks, setJobLinks ] = useState([])
    
    // Temp hard coded
    const categories = [
        "/d/software-qa-dba-etc/search/sof",  // software
        "/d/web-html-info-design/search/web",  // web / info design
        "/d/computer-gigs/search/cpg",  // gigs - computer 
    ];
   
    let getCitiesInState = props.useFetch('http://localhost:8000/cities/links',
    {
        method: 'POST',
        body: JSON.stringify({ state: props.territory }),
        headers: {"Content-Type": "application/json"}
    });
    
    useEffect(() => {
        setCityLinks(getCitiesInState.response);
        console.log(getCitiesInState)
	})
    
    return (
        <div className="city-territory-container" key={props.index}>
            <div className="city-territory-container-loading"></div>
            <div className="city-territory-container-item">{props.territory}</div>
            <div className="city-territory-container-item">city count: {props.cityCount}</div>
        </div>
    )
    
}


export default CityTerritoryContainer;