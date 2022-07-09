import React from "react"

import "./PlaceDetails";
import PlaceDetails from "./PlaceDetails";

const PlaceList = ({ place }) => {
    return (
        <div className="container">
            <div className="row">

                {place.map((data) => {
                    const { id, title, category, price, img, desc } = data
                    return <PlaceDetails key={id} placeDesc={desc} placeName={title} placePrice={price} imgUrl={img} place={category} />
                })}

            </div>
        </div>
    );
}

export default PlaceList