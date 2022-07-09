import React from "react";

import "./PlaceDetails.css"

const PlaceDetails = () => {
    return (
        <div className="col-md-4">
            <article className="mainPlace">
                <img alt="sadsa" src="https://www.toureiffel.paris/sites/default/files/actualite/image_principale/vue_depuisjardins_webbanner_3.jpg" />
                <div className="placeInfo">
                    <header className="placeHeader">
                        <b className="placeName">skfnsojd</b>
                        <p className="placePrice">$123</p>
                    </header>
                    <p className="placeDesc">
                        vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats
                    </p>
                </div>
            </article>
        </div>

    );
}

export default PlaceDetails