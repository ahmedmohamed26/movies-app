import React, { useState, useEffect } from 'react';
import './movie-details.scss';
import { movieDetails, URL_IMAGE } from '../../services/movies';
const MovieDetails = (props) => {
	const [movie, setMovie] = useState({});
	const [movieCountry, setMovieCountry] = useState([]);
	const [genres, setGenres] = useState([]);

	// const [loadSpinner, setloadSpinner] = useState(false);
	const ID = props.match.params.id;
	useEffect(() => {
		getMovieDetails();
	}, [ID]);

	function getMovieDetails() {
		// setloadSpinner(true);
		movieDetails(ID)
			.then(({ data }) => {
				console.log(data);
				setMovie(data);
				setGenres(data.genres);
				setMovieCountry(data?.production_countries[0]?.name);
				// const movieCountry = data.production_countries[0].name;
				// setloadSpinner(false);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
	return (
		<section className='movie-details'>
			<div className='background-poster'>
				{movie.backdrop_path != null ? <img src={`${URL_IMAGE}` + movie.backdrop_path} alt='poster movie' /> : <img src={`${URL_IMAGE}` + movie.poster_path} alt='poster movie' />}
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<div className='poster-movie'>
							<img src={`${URL_IMAGE}` + movie.poster_path} alt='posterOne' />
						</div>
					</div>
					<div className='col-md-8'>
						<div className='more-details'>
							<h4>
								movie name :<span className='ml-2'>{movie.title}</span>
							</h4>
							<h4>
								IMDB Rating :<span className='ml-2'>{movie.vote_average}</span>
							</h4>
							<h4>
								genre :
								{genres
									.flatMap((item, index) => [
										<span className='ml-2' key={index}>
											{item.name}
										</span>,
										<span> ,</span>,
									])
									.slice(0, -1)}
							</h4>

							<h4>
								Release year :
								<span className='ml-2'>
									{new Date(movie.release_date).getFullYear()}
								</span>
							</h4>
							<h4>
								Production budget :
								<span className='ml-2'>{movie.budget} $</span>
							</h4>
							<h4>
								Country :<span className='ml-2'>{movieCountry}</span>
							</h4>
							<h4>
							Vote Count :<span className='ml-2'>{movie.vote_count}</span>
							</h4>
							<div>
								<h4>Overview :</h4>
								<span>{movie.overview}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MovieDetails;
