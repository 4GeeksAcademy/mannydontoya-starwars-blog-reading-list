const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl = "https://swapi.dev/api/";

	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			// getCharacters: () => {
			// 	fetch(apiUrl + "people")
			// 	.then(resp => {
			// 		console.log("Response:", resp); // Log the raw response
			// 		return resp.json();
			// 	})
			// 	.then(data => {
			// 		console.log("Result:", data); // Log the parsed result
			// 		setStore({ characters: data.results });
			// 	})
			// 	.catch(error => console.log(error));
			// },
			// --- use the above method if you want to console log the response and the result from the api ---

			getCharacters: () => {
				fetch(apiUrl + "people")
					.then(resp => resp.json())
					.then(data => setStore({ characters: data.results }))
					.catch(error => console.error("Error fetching characters:", error))
			},
			getPlanets: () => {
				fetch(apiUrl + "planets")
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.error("Error fetching planets:", error))
			},
			getStarships: () => {
				fetch(apiUrl + "starships")
					.then(resp => resp.json())
					.then(data => setStore({ starships: data.results }))
					.catch(error => console.error("Error fetching starships:", error))
			},

			addFavorites: (favItem) => {
				setStore({
					favorites: [...getStore().favorites, favItem]
				});
				// --- or you could write it like this ---
				// const store = getStore();
				// store.favorites.push(favItem);
				// setStore(store);
			},
			deleteFavorites: (index) => {
				// const store = getStore();
				// store.favorites.splice(index, 1);
				// setStore(store);
				// --- option below is better as it's better to create a new array vs mutating an array ---
				const store = getStore();
				const newFavorites = store.favorites.filter((_, i) => i !== index);
				setStore({ favorites: newFavorites });
			}
		}
	};
};


export default getState;