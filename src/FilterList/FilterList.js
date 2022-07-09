import React from "react";
import Filter from "./Filter";

import "./filter.css"

const FilterList = () => {
    return (
        <React.Fragment>
            <div className="filterList">
                <Filter filterName='all' />
                <Filter filterName='India' />
                <Filter filterName='Canada' />
                <Filter filterName='Paris' />
            </div>
        </React.Fragment>
    );
}

export default FilterList