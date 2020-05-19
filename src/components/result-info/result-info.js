import React, { useState } from 'react';
import './result-info.css';

const ResultInfo = () => {

    return (
        <div className="result-info bg-background-dark">
            <div className="result-info-date">05-25-2020</div>
            <div className="result-info-link"><a href="htps://example.com"></a>Some job title</div>
        </div>
    );
}

export default ResultInfo;