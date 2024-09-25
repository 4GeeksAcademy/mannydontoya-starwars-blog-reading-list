import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

import { Card } from "../component/card.js";  

import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div id="homePage">
			<div className="mt-5 d-flex flex-column w-100 align-items-center">
				<h1>Characters</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.characters.map((item, index) => (
						<Card item={item} index={index} key={index} category="characters" />
					))}
				</div>
			</div>
			<div className="mt-5 d-flex flex-column w-100 align-items-center">
				<h1>Planets</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.planets.map((item, index) => (
						<Card item={item} index={index} key={index} category="planets" />
					))}
				</div>
			</div>
			<div className="mt-5 d-flex flex-column w-100 align-items-center">
				<h1>Starships</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.starships.map((item, index) => (
						<Card item={item} index={index} key={index} category="starships" />
					))}
				</div>
			</div>
		</div>
	)
}