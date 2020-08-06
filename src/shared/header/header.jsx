import React, { useState} from 'react';
import { Navbar } from 'reactstrap';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.scss';
import { FormGroup, Input } from 'reactstrap';
import { searchMovies, URL_IMAGE } from '../../services/movies';
import { Link } from 'react-router-dom';

const Header = () => {
	const [listMovies, setListMovies] = useState([]);


	function getSearchMovies(keyword) {
		console.log(keyword.length)
		if (keyword.length !== 0) {
			searchMovies(keyword)
				.then(({ data }) => {
					setListMovies(data.results);
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		} else {
			setListMovies([]);
		}
	}

	const clearInput = () => {
		setListMovies([]);
		document.getElementById('form').reset();
	};

	return (
		<header>
			<Navbar className='navbar'>
				<Container>
					<NavLink className='navbar-brand' to='/home'>
						Movies App
					</NavLink>
					<form id='form'>
						<FormGroup className='mb-0'>
							<Input
								className='form-control'
								type='text'
								name='search'
								placeholder='Movie search'
								onChange={(event) => getSearchMovies(event.target.value)}
							/>
						</FormGroup>
						{listMovies.length > 0 ? (
							<ul className='list-unstyled list-movies'>
								{listMovies.map((movie) => {
									return (
										<li key={movie.id}>
											<Link
												to={`/movie-details/${movie.id}`}
												className='item-link'
												onClick={() => clearInput()}>
												<img
													src={`${URL_IMAGE}` + movie.poster_path}
													alt={movie.original_title}
												/>
												<h6>{movie.original_title}</h6>
											</Link>
										</li>
									);
								})}
							</ul>
						) : null}
					</form>
					<ul className='list-unstyled'>
						<li>
							<NavLink exact className='nav-item' to='/home'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink exact className='nav-item' to='/about'>
								About
							</NavLink>
						</li>
						<li>
							<NavLink exact className='nav-item' to='/top-rated'>
								top rated
							</NavLink>
						</li>
					</ul>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
