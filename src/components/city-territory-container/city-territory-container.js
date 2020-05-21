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
    // Prevent infinite useEffect
    const [ loadedNewCityLinks, setLoadedNewCityLinks ] = useState(false);

    // Temp hard coded
    const categories = [
        "/d/software-qa-dba-etc/search/sof",  // software
        "/d/web-html-info-design/search/web",  // web / info design
        "/d/computer-gigs/search/cpg",  // gigs - computer 
    ];

    async function fetchCityJobs() {
        let container = [];

        cityLinks.map((city) => {
            categories.map((category) => {
                let url = `${city.city_url}${category}`;
                container.push(url);
            })
        })    
        
        console.log(container)
        setJobLinks(container);
        setLoadedNewCityLinks(true)
	}


    async function fetchCitiesInStateData() {
        // send HTTP request
        const response = await fetch('http://localhost:8000/cities/links',
        {
			method: 'POST',
			body: JSON.stringify({ state: props.territory }),
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json();
        setCityLinks(data);
        fetchCityJobs();
    }
    
	useEffect(() => {
		fetchCitiesInStateData();
    }, [])
    
    useEffect(() => {
		fetchCitiesInStateData();
	}, [ loadedNewCityLinks ])
    
    // if (jobs.length !== 0) {
    //     return (
    //         <div className="city-state-container">
    //             {jobs.map((job, i) => 
    //                 <ResultInfo
    //                     index={i}
    //                     title={job.resultTitleText}
    //                     href={job.resultTitleHref}
    //                     // dateTitle={job.date.dateTitle}
    //                     // dateString={job.date.dateString}
    //                     // timeString={job.date.timeString}
    //                     // year={job.date.year}
    //                     // month={job.date.month}
    //                     // day={job.date.day}
    //                 />
    //             )}
                    
    //         </div>
    //     );
    // }
    return (
        <div className="city-territory-container" key={props.index}>
            <div className="city-territory-container-loading"></div>
            <div className="city-territory-container-item">{props.territory}</div>
            <div className="city-territory-container-item">city count: {props.cityCount}</div>
        </div>
    )
    
}


export default CityTerritoryContainer;