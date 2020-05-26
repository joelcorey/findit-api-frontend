import React, { useState, useEffect } from 'react';
import './city-container.css';

import ResultInfo from '../result-info/result-info';

const CityTerritoryContainer = (props) => {

    //const [ jobs, setJobs ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    // 
    const [ jobs, setJobs ] = useState()
   
    let getCityJobs= props.useFetch('http://localhost:8000/jobs',
    {
        method: 'POST',
        body: JSON.stringify({ url: props.url }),
        headers: {"Content-Type": "application/json"}
    });
    
    useEffect(() => {
        setJobs(getCitiesJobs.response);
    })

    if(!loading) {
        return (
            <div >
                Done loading
            </div>
        )
    }
    return (
        <div>
            loading
        </div>
    )
    
}


export default CityTerritoryContainer;