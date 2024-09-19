import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ item, index, category }) => {
    return (
        <div className="card mx-3 col-1" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text">
                    {
                        category == "characters" ? "Gender: " + item.gender :
                        category == "planets" ? "Population: " + item.population :
                        "Crew: " + item.crew
                    }
                </p>
                <p className="card-text">
                    {
                        category == "characters" ? "Gender: " + item.gender :
                        category == "planets" ? "Population: " + item.population :
                        "Crew: " + item.crew
                    }
                </p>
                <p className="card-text">
                    {
                        category == "characters" ? "Gender: " + item.gender :
                        category == "planets" ? "Population: " + item.population :
                        "Crew: " + item.crew
                    }
                </p>
                <Link to={"/details/" + category + "/" + index}className="card-link">Learn more</Link>
                <a href="#" className="card-link"><i class="fas fa-heart"></i></a>
            </div>
        </div>
    )
};