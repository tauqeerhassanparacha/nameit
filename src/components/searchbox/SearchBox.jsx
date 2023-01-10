import React from "react";
import "./searchbox.css"


const SearchBox = ({handleChange}) => {
    return(
        <div className="search-container">
            <input
             placeholder="Type Keywords"
             className="search-input"
             onChange ={(event) => handleChange(event.target.value)}
            />
        </div>
    )
} 


export default SearchBox;