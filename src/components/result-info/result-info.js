import React, { useState } from 'react';
import './result-info.css';

const ResultInfo = (props) => {
   
    return (
        <div className="result-info bg-background-dark" key={props.index}>
            <div className="result-info-date">{props.month}-{props.day}-{props.year}</div>
            <div className="result-info-time"> {props.timeString}</div>
            <div className="result-info-item result-info-link"><a href={props.url} target="_blank">{props.title}</a></div>
        </div>
    );
}

export default ResultInfo;