import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import newstarwarslogo from "../../img/newstarwarslogo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleDeleteFavorite = (id) => {
		actions.deleteFavorites(id);
	};

	return (
		<nav className="navbar navbar-dark bg-black py-3">
			<div className="container">
				<Link to="/" className="navbar-brand">
					<img 
						id="swLogo" 
						src={newstarwarslogo} 
						alt="Star Wars Logo" 
						className="img-fluid" 
						style={{ maxHeight: '100px', width: 'auto' }} 
					/>
				</Link>
				<div className="dropdown">
					<button id="favBtn" type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" style={{ zIndex: 1050 }}>
						{store.favorites.length > 0 ? (
							store.favorites.map((fav) => (
								<li key={fav.id} className="dropdown-item d-flex justify-content-between align-items-center">
									<Link to={"/details/" + fav.category + "/" + fav.index} className="text-white text-decoration-none">
										{fav.name}
									</Link>
									<button 
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											handleDeleteFavorite(fav.id);
										}} 
										className="btn btn-sm btn-outline-danger ms-2"
									>
										<i className="fas fa-trash"></i>
									</button>
								</li>
							))
						) : (
							<li className="dropdown-item text-center">(empty)</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};