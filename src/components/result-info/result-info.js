import React, { useState } from 'react';
import './result-info.css';

const ResultInfo = (props) => {
   
    return (
        <div className="result-info bg-background-dark" key={props.index}>
            <div className="result-info-date">{props.month} {props.year} {props.day}</div>
            <div className="result-info-link"><a href={props.url}>{props.title}</a></div>
        </div>
    );
}

export default ResultInfo;