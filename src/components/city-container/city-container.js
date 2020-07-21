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

    const daysInPast = 1;
    const momentTime = moment();
    const momentYear  = momentTime.format('YYYY');
    const momentMonth = momentTime.format('M');
    const momentDay   = momentTime.format('D');
    const momentTimeString = moment(`${momentYear}-${momentMonth}-${momentDay}`, 'YYYY-MM-DD');

    let getCityJobs = [];

    if(props.currentState === props.territor) {
        getCityJobs = props.useFetch('http://localhost:8000/jobs',
        {
            method: 'POST',
            body: JSON.stringify({ url: props.url }),
            headers: {"Content-Type": "application/json"}
        });
        
    }

    function compareDates(year, month, day) {
        return momentTimeString.diff(moment(`${year}-${month}-${day}`, 'YYYY-MM-DD'), 'days')
    }

    function checkFilters(jobTitle) {
        let title = jobTitle.toLowerCase();
        for (let i = 0; i < filters.length; i++) {
            let filter = filters[i].toLowerCase();
            if(typeof jobTitle.includes === 'function' && title.includes(filter)) {
                return false
            }
        }
        return true;
    }

    function checkKeywords(jobTitle) {
        let title = jobTitle.toLowerCase();
        for (let i = 0; i < keywords.length; i++) {
            if(typeof jobTitle.includes === 'function' && title.includes(keywords[i])) {
                return true
            }
        }
        return false;
    }   

    // todo: remove duplicate urls
    // function checkUrls() {

    // }

    useEffect(() => {
        setJobs(getCityJobs.response);
        setLoading(false);
    }, [getCityJobs] )
    // console.log(props)
    if(!loading && jobs !== null && typeof jobs.map === 'function') {
        return (
            <>
                {/* <div className="city-header">
                    <div className="city-header-item">{props.territory}</div>
                    <div className="city-header-item">{props.city}</div>
                    <div className="city-header-item city-header-url">{props.url}</div>
                </div> */}
                <div>
                    {jobs.map((job, i) => {
                        if (
                            compareDates(job.date.year, job.date.month, job.date.day) <= daysInPast 
                            && checkFilters(job.resultTitleText)
                            && checkKeywords(job.resultTitleText)
                        ) {
                            return <ResultInfo 
                                key={i}
                                territory={props.territory}
                                city={props.city}
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
    // if(!loading) {
    //     return (
    //         <div></div>
    //     )
    // }
    return (
        <div className="city-header">
            <div className="city-loading" />
            <div className="city-header-item">{props.territory}</div>
            <div className="city-header-item">{props.city}</div>
            <div className="city-header-item city-header-url">{props.url}</div>
        </div>

    )
    
}

export default CityTerritoryContainer;