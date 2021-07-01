import React from 'react';
import './NuturalCard.css';

function NuturalCard() {
    return (
        <div className="container juice-banner">
            <div className="text-center text-white pt-5">
                <h2>
                    <div className="display-5 fw-bold">
                        Fresh Juice <br /> 100% Organic
                    </div>
                </h2>
                <button className="btn btn-main my-5 p-3 fw-bold">Shop Now</button>
            </div>
        </div>
    )
}

export default NuturalCard
