import React from "react";

import "./PlaceDetails.css"

const PlaceDetails = ({ imgUrl, placeName, placePrice, placeDesc, place }) => {
    return (
        <div className="col-md-4">
            <article className="mainPlace">
                <img alt={placeName} src={imgUrl} />
                <div className="placeInfo">
                    <header className="placeHeader">
                        <b className="placeName">{placeName}, <br />{place}</b>
                        <p className="placePrice">${placePrice}</p>
                    </header>
                    <p className="placeDesc">
                        {placeDesc}
                    </p>
                </div>
            </article >
        </div >

    );
}

export default PlaceDetails