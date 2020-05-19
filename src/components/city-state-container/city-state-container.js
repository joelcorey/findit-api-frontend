import React, { useState } from 'react';
import './city-state-container.css';

import ResultInfo from '../result-info/result-info';

const CityStateContainer = () => {

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

export default CityStateContainer;