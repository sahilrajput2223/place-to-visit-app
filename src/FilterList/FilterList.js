import React from "react";
import Filter from "./Filter";


const FilterList = () => {
    return (
        <React.Fragment>
            <div className=".filterList">
                <Filter filterName='all' />
                <Filter filterName='India' />
                <Filter filterName='Canada' />
                <Filter filterName='Paris' />
            </div>
        </React.Fragment>
    );
}

export default FilterList