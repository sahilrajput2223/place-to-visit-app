import React from "react";

import "./filter.css"

const Filter = ({ filterName, updatePlaceDataBasedOnFilter }) => {
    return (
        <React.Fragment>
            <button className="filterBtn" onClick={() => { updatePlaceDataBasedOnFilter(filterName) }}>{filterName}</button>
        </React.Fragment>
    );
}

export default Filter