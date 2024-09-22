import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/details.css";
import emptyPicImg from "../../img/star-wars-empty.jpg";
import tatooineImg from "../../img/tatooine.jpg"


export const Details = ({ category }) => {
	const { store } = useContext(Context);
	const [imgError, setImgError] = useState(false);
	const params = useParams();
	const location = useLocation();

	useEffect(() => {
		setImgError(false);
	}, [location]);


	const character = store.characters.find((item, index) => index == params.theid);
	const planet = store.planets.find((item, index) => index == params.theid);
	const starship = store.starships.find((item, index) => index == params.theid);

	const GUIDE_URL = "https://starwars-visualguide.com/assets/img/"
	const getImgUrl = () => {
		if (imgError && planet.name === "Tatooine") {
			return tatooineImg;
		} else if (imgError) {
			return emptyPicImg;
		} return GUIDE_URL + category + "/" + (parseInt(params.theid) + 1) + ".jpg";
	}

	const handleImgError = () => {
		setImgError(true);
	};


	return (
		<div className="detailsDiv">
			<div className="detailsTopDiv">
				<div className="detailsImgDiv">
					<img
						src={ getImgUrl() }
						onError={handleImgError}
						className="detailsImg"
						alt="image not available"
					/>
				</div>
				<div className="detailsTextDiv">
					<h2 id="detailsName">
						<u>
							{
								category == "characters" ? character.name :
									category == "planets" ? planet.name :
										starship.name
							}
						</u>
					</h2>
					<p id="detailsNameDesc">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
					</p>
				</div>
			</div>

			<div className="detailsBtmDiv">
				<div className="btmDivs">
					<h6>
						{
							category == "characters" ? "Birth Year" :
								category == "planets" ? "Terrain" :
									"Manufacturer"
						}
					</h6>
					<p>
						{
							category == "characters" ? character.birth_year :
								category == "planets" ? planet.terrain :
									starship.manufacturer
						}
					</p>
				</div>
				<div className="btmDivs">
					<h6>
						{
							category == "characters" ? "Gender" :
								category == "planets" ? "Climate" :
									"Starship Class"
						}
					</h6>
					<p>
						{
							category == "characters" ? character.gender :
								category == "planets" ? planet.climate :
									starship.starship_class
						}
					</p>
				</div>
				<div className="btmDivs">
					<h6>
						{
							category == "characters" ? "Height" :
								category == "planets" ? "Gravity" :
									"Max Atmosphering Speed"
						}
					</h6>
					<p>
						{
							category == "characters" ? character.height :
								category == "planets" ? planet.gravity :
									starship.max_atmosphering_speed
						}
					</p>
				</div>
				<div className="btmDivs">
					<h6>
						{
							category == "characters" ? "Mass" :
								category == "planets" ? "Diameter" :
									"Crew"
						}
					</h6>
					<p>
						{
							category == "characters" ? character.mass :
								category == "planets" ? planet.diameter :
									starship.crew
						}
					</p>
				</div>
				<div className="btmDivs">
					<h6>
						{
							category == "characters" ? "Skin Color" :
								category == "planets" ? "Surface Water" :
									"Passengers"
						}
					</h6>
					<p>
						{
							category == "characters" ? character.skin_color :
								category == "planets" ? planet.surface_water :
									starship.passengers
						}
					</p>
				</div>
				<div className="btmDivs">
					<h6>
						{
							category == "characters" ? "Eye Color" :
								category == "planets" ? "Population" :
									"Consumables"
						}
					</h6>
					<p>
						{
							category == "characters" ? character.eye_color :
								category == "planets" ? planet.population :
									starship.consumables
						}
					</p>
				</div>
			</div>
		</div>
	);
};


Details.propTypes = {
    category: PropTypes.string.isRequired
};
