import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1>Characters</h1>
			<ul className="d-flex overflow-auto">
				{store.characters.map((character, index) => <Card item={character} index={index} key={index} category="characters" />
				)}
			</ul>
			<h1>Planets</h1>
			<ul className="d-flex overflow-auto">
				{store.planets.map((planet, index) => <Card item={planet} index={index} key={index} category="planets" />
				)}
			</ul>
			<h1>Vehicles</h1>
			<ul className="d-flex overflow-auto">
				{store.vehicles.map((vehicle, index) => <Card item={vehicle} index={index} key={index} category="vehicles" />
				)}
			</ul>
		</div>
	)
};
