import React, { useState, useEffect } from 'react';
import './city-container.css';

import ResultInfo from '../result-info/result-info';

const CityTerritoryContainer = (props) => {

    const [ loading, setLoading ] = useState(true)
    const [ jobs, setJobs ] = useState()
    const [ isCurrentState, setIsCurrentState ] = useState();
    
    let getCityJobs;

    if(props.currentState === props.territor) {
        getCityJobs = props.useFetch('http://localhost:8000/jobs',
        {
        method: 'POST',
        body: JSON.stringify({ url: props.url }),
        headers: {"Content-Type": "application/json"}
        });
        
    }

    useEffect(() => {

    })

    useEffect(() => {
        setJobs(getCityJobs.response);
        setLoading(false);
    }, [getCityJobs] )

    if(!loading && jobs !== null) {
        return (
            <>
                <div>{props.territory}</div>
                <div>{props.city}</div>
                <div>{props.url}</div>
                <div>
                    {jobs.map((job, i) => {
                        return <ResultInfo 
                            key={i}
                            title={job.resultTitleText}
                            url={job.resultTitleHref}
                            dateTitle={job.date.dateTitle}
                            dateString={job.date.dateString}
                            timeString={job.date.timeString}
                            year={job.date.year}
                            month={job.date.month}
                            day={job.date.day}
                        />
                    })}
                </div>
            </>
        )
    }

    return (
        <div>
            loading
        </div>
    )
    
}

export default CityTerritoryContainer;