import React, { useState, useEffect } from 'react';
import './city-container.css';
import moment from 'moment';

import filters from '../../util/filters';
import keywords from '../../util/keywords';

import ResultInfo from '../result-info/result-info';

const CityTerritoryContainer = (props) => {

    const [ loading, setLoading ] = useState(true)
    const [ jobs, setJobs ] = useState()
    const [ isCurrentState, setIsCurrentState ] = useState();

    const daysInPast = 10;
    const momentTime = moment();
    const momentYear  = momentTime.format('YYYY');
    const momentMonth = momentTime.format('M');
    const momentDay   = momentTime.format('D');
    const momentTimeString = moment(`${momentYear}-${momentMonth}-${momentDay}`, 'YYYY-MM-DD');

    let getCityJobs;

    if(props.currentState === props.territor) {
        getCityJobs = props.useFetch('http://localhost:8000/jobs',
        {
        method: 'POST',
        body: JSON.stringify({ url: props.url }),
        headers: {"Content-Type": "application/json"}
        });
        
    }

    function compareDates(year, month, day) {
        
        
        let difference = momentTimeString.diff(moment(`${year}-${month}-${day}`, 'YYYY-MM-DD'), 'days')

        //console.log(difference);

        return difference;
    }

    function checkFilters(jobTitle) {
        for (let i = 0; i < keywords.length; i++) {
            if(jobTitle.includes(keywords[i])) {
                return true
            }
        }
        return false;
    }

    useEffect(() => {
        setJobs(getCityJobs.response);
        setLoading(false);
    }, [getCityJobs] )

    if(!loading && jobs !== null) {
        return (
            <>
                <div className="city-header">
                    <div className="city-header-item">{props.territory}</div>
                    <div className="city-header-item">{props.city}</div>
                    <div className="city-header-item city-header-url">{props.url}</div>
                </div>
                <div>
                    {jobs.map((job, i) => {
                        if (
                            compareDates(job.date.year, job.date.month, job.date.day) <= daysInPast 
                            && checkFilters(job.resultTitleText)
                        ) {
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
                        }
                       
                    })}
                </div>
            </>
        )
    }
    return (
        <div className="city-header">
            <div className="city-loading" />
            <div className="city-header-item">{props.territory}</div>
            <div className="city-header-item">{props.city}</div>
            <div className="city-header-item city-header-url">{props.url}</div>
            {/* <div className="no-result-info-item">No results found</div> */}
        </div>
    )
    
}

export default CityTerritoryContainer;