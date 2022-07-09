import React from "react"

import "./PlaceDetails";
import PlaceDetails from "./PlaceDetails";

const PlaceList = () => {
    return (
        <div className="container">
            <div className="row">
                <PlaceDetails />
                <PlaceDetails />
                <PlaceDetails />
                <PlaceDetails />
                <PlaceDetails />
            </div>
        </div>
    );
}

export default PlaceList