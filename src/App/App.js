import React from "react";

import AppTitle from "../AppTitle/AppTitle"
import FilterList from "../FilterList/FilterList";
import PlaceList from "../PlaceData/PlaceList";
import place from "../Data"

import "./App.css"

const App = () => {

    const [placeData, setPlaceData] = React.useState(place);

    const updatePlaceDataBasedOnFilter = (category) => {
        if (category === "All") {
            setPlaceData(place);
        } else {
            var newPlaceData = place.filter((singlePlaceData) =>
                singlePlaceData.category === category)
            setPlaceData(newPlaceData);
        }

    }

    return (
        <React.Fragment>
            <div className="mainDiv">
                <AppTitle />
                <FilterList updatePlaceDataBasedOnFilter={updatePlaceDataBasedOnFilter} />
                <PlaceList place={placeData} />
            </div>
        </React.Fragment>
    );
}

export default App