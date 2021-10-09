import React from 'react'
import "./Result.css"
const Result = ({result,arr}) => {
    return (
        <div className="result-container">
           <div className="result">
            <h1>Result is </h1>
            <h4>{result}</h4>
            <p>{arr}</p>
            </div>
            </div>
           
       
    )
}

export default Result
