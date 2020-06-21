import React ,{useState,useEffect} from 'react';
import './movie-details.scss';
import { movieDetails, URL_IMAGE } from '../../services/movies';
const MovieDetails = (props) => {
	const [movie, setMovie] = useState({});
	const [loadSpinner, setloadSpinner] = useState(false);
	const ID = props.match.params.id
	useEffect(() => {
		getMovieDetails();
	}, {});

	function getMovieDetails() {
		setloadSpinner(true);
		movieDetails(ID)
			.then(({ data }) => {
				console.log(data);
				setMovie(data);
				setloadSpinner(false);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
	return (
		// <h1>hello DetailsMovie</h1>
		<img
		src={`${URL_IMAGE}` + movie.poster_path}
		alt='posterOne'
	/>
	);
};

export default MovieDetails;
