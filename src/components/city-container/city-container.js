import React, { useState, useEffect } from 'react';
import './city-container.css';

import ResultInfo from '../result-info/result-info';

const CityTerritoryContainer = (props) => {

    //const [ jobs, setJobs ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    // 
    const [ jobs, setJobs ] = useState()
    const [ isCurrentState, setIsCurrentState ] = useState(false);

    let getCityJobs;
    
        getCityJobs = props.useFetch('http://localhost:8000/jobs',
        {
        method: 'POST',
        body: JSON.stringify({ url: props.url }),
        headers: {"Content-Type": "application/json"}
        });
    }

    useEffect(() => {
        if (props.currentState === props.territory) {
            setIsCurrentState(true)
        }
    } )

    useEffect(() => {
        setJobs(getCityJobs.response);
    }, [isCurrentState] )

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