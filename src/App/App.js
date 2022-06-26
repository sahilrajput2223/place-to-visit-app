import React from "react";

import AppTitle from "../AppTitle/AppTitle"
import FilterList from "../FilterList/FilterList";

import "./App.css"

const App = () => {
    return (
        <React.Fragment>
            <div className="mainDiv">
                <AppTitle />
                <FilterList />
            </div>
        </React.Fragment>
    );
}

export default App