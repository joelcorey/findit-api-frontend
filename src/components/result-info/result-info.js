import React, { useState } from 'react';
import './result-info.css';

const ResultInfo = (props) => {
    console.log(props)
    return (
        <div className="result-info bg-background-dark" key={props.index}>
            <div className="result-info-date">05-25-2020</div>
            <div className="result-info-link"><a href="htps://example.com">{props.title}</a></div>
        </div>
    );
}

export default ResultInfo;