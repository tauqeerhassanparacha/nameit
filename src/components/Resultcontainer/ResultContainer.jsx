import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultContainer.css";

const ResultContainer = ({ suggestedNames }) => {

    const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>;
    });

    return   <div className="result-container"> {suggestedNamesJsx} </div>;
};


export default ResultContainer;