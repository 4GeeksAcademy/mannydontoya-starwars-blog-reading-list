import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import tatooineImg from "../../img/tatooine.jpg";
import bespinImg from "../../img/bespin.jpg";
import emptyPicImg from "../../img/star-wars-empty.jpg";

export const Card = ({ item, index, category }) => {
    const { store, actions } = useContext(Context);
    const [imgError, setImgError] = useState(false);

    const handleImgError = () => {
        setImgError(true);
    };
    
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/";

    const getImgUrl = () => {
        if (item.name === "Tatooine") {
            return tatooineImg;
        } else if (item.name === "Bespin") {
            return bespinImg;
        } else if (category === "starships") {
            return store.starshipImages[index] || emptyPicImg;
        } else if (imgError) {
            return emptyPicImg;
        } return `${GUIDE_URL}${category}/${index + 1}.jpg`
    }

    const imgStyle = {
        height: category === "starships" ? "180px" :
            category === "planets" ? "280px" :
                "auto",
        objectFit: "cover",
    };

    const renderDetail = (label, value) => (
        <p className="mb-1">
            <span className="detail-label text-warning">{label}:</span> <span className="text-light">{value}</span>
        </p>
    );

    const handleFavorites = () => {
        const id = `${category}-${index}`;
        const isFavorite = store.favorites.some(fav => fav.id === id);
        
        if (isFavorite) {
            actions.deleteFavorites(id);
        } else {
            actions.addFavorites({ name: item.name, index, category });
        }
    };
    
    const isFavorite = store.favorites.some(fav => fav.id === `${category}-${index}`);

    return (
        <div className="card bg-dark text-light border border-warning" style={{ boxShadow: '0 0 10px rgba(255, 232, 31, 0.5)' }}>
            <img 
                src={getImgUrl()}
                onError={handleImgError} 
                style={imgStyle}
                className="card-img-top" 
                alt="image not available"
            />
            <div id="cardBody" className="card-body">
                <h5 className="card-title fw-bold text-warning"><u>{item.name}</u></h5>
                <div className="details mt-2 mb-3">
                    {category === "characters" && (
                        <>
                            {renderDetail("Gender", item.gender)}
                            {renderDetail("Birth Year", item.birth_year)}
                            {renderDetail("Skin Color", item.skin_color)}
                        </>
                    )}
                    {category === "planets" && (
                        <>
                            {renderDetail("Population", item.population)}
                            {renderDetail("Gravity", item.gravity)}
                            {renderDetail("Terrain", item.terrain)}
                        </>
                    )}
                    {category !== "characters" && category !== "planets" && (
                        <>
                            {renderDetail("Manufacturer", item.manufacturer)}
                            {renderDetail("Speed", item.max_atmosphering_speed)}
                            {renderDetail("Crew", item.crew)}
                        </>
                    )}
                </div>
                <div id="cardBtnGroup" className="d-flex justify-content-between">
                    <Link to={"/details/" + category + "/" + index}>
                        <button type="button" className="btn btn-warning text-dark">Learn more!</button>
                    </Link>
                    <button type="button" className="btn btn-outline-warning" onClick={handleFavorites}>
                        <i className={`fas fa-heart ${isFavorite ? 'text-warning' : ''}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};