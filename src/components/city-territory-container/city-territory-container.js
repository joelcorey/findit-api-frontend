import React, { useState, useEffect } from 'react';
import './city-territory-container.css';

import ResultInfo from '../result-info/result-info';

const CityTerritoryContainer = (props) => {

    //const [ jobs, setJobs ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    // list of all cities in state, used to build category links per city
    const [ cityLinks, setCityLinks ] = useState([]);

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
	}

	useEffect(() => {
		fetchCitiesInStateData();
	}, [])
    
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