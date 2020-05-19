import React, { useState, useEffect } from 'react';
import './city-state-container.css';

import ResultInfo from '../result-info/result-info';

export default function  CityStateContainer() {

    const [ state, setState ] = useState({  });

    async function fetchData() {
        // send HTTP request
        const response = await fetch('http://localhost:8000/cities',
        {
            method: 'POST',
            body: JSON.stringify({
                state: "Oregon"
            })
        });
        const data = await response.json();
        console.log(data);
        setState(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="city-state-container">
            <ResultInfo />
            <ResultInfo />
            <ResultInfo />
            <ResultInfo />
            <ResultInfo />
        </div>
    );
}

