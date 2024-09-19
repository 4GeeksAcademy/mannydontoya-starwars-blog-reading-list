import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => { setCharacters(data.results) })
			.catch(err => { console.error(err) })
		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => { setPlanets(data.results) })
			.catch(err => { console.error(err) })
		fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(data => { setVehicles(data.results) })
			.catch(err => { console.error(err) })
	}, []);


	return (
		<div>
			<h1>Characters</h1>
			<ul className="d-flex overflow-auto">
				{characters.map((character, index) => <Card character={character} />
				)}
			</ul>
			<h1>Planets</h1>
			<ul className="d-flex overflow-auto">
				{planets.map((planet, index) => <Card planet={planet} />
				)}
			</ul>
			<h1>Vehicles</h1>
			<ul className="d-flex overflow-auto">
				{vehicles.map((vehicle, index) => <Card vehicle={vehicle} />
				)}
			</ul>
		</div>
	)
};
