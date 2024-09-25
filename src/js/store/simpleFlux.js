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
			},
			deleteFavorites: (index) => {
				const store = getStore();
				const newFavorites = store.favorites.filter((_, i) => i !== index);
				setStore({ favorites: newFavorites });
			}
		}
	};
};


export default getState;