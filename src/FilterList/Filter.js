import React from "react";

import "./filter.css"

const Filter = ({ filterName }) => {
    return (
        <React.Fragment>
            <button className="filterBtn">{filterName}</button>
        </React.Fragment>
    );
}

export default Filter