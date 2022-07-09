import React from "react";
import Filter from "./Filter";


const FilterList = ({ updatePlaceDataBasedOnFilter }) => {
    return (
        <React.Fragment>
            <div className="filterList">
                <Filter filterName='All' updatePlaceDataBasedOnFilter={updatePlaceDataBasedOnFilter} />
                <Filter filterName='Ahmedabad' updatePlaceDataBasedOnFilter={updatePlaceDataBasedOnFilter} />
                <Filter filterName='Canada' updatePlaceDataBasedOnFilter={updatePlaceDataBasedOnFilter} />
                <Filter filterName='Paris' updatePlaceDataBasedOnFilter={updatePlaceDataBasedOnFilter} />
            </div>
        </React.Fragment>
    );
}

export default FilterList