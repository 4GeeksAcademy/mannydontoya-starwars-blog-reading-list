import React from "react";

export const Card = ({ character, planet, vehicle }) => {
    return (
        <div className="card mx-3 col-1" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{character && character.name}{planet && planet.name}{vehicle && vehicle.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text">{character.mass}{planet.mass}{vehicle.mass}</p>
                <a href="#" className="card-link">Learn more</a>
                <a href="#" className="card-link"><i class="fas fa-heart"></i></a>
            </div>
        </div>
    )
};