import React, { useState, useEffect } from 'react';
import './top-rated.scss';
import { TopRated, URL_IMAGE } from '../../services/movies';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/loading';
import { Container } from 'reactstrap';

const TopRatedMovies = () => {
	const [allMovies, setAllMovies] = useState([]);
	const [loadSpinner, setloadSpinner] = useState(false);
	useEffect(() => {
		getTopRated();
	}, []);

	function getTopRated() {
		setloadSpinner(true);
		TopRated(1)
			.then(({ data }) => {
				console.log(data);
				setAllMovies(data.results);
				allMovies.slice(2);
				setloadSpinner(false);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
	return (
		<section className='top-rated-section'>
			<Container>
				<div className='col-md-12'>
					<div className='top-rated'>
						<div className='d-flex justify-content-between align-items-center mb-3'>
							<h4 className='mb-0'>top rated</h4>
						</div>
						{!loadSpinner ? (
							<div className='row'>
								{allMovies.map((item, index) => (
									<div className='col-md-3 col-xs-6 col-sm-6'>
										<div className='parent'>
											<Link to={'/details-movie'} className='item-link'>
												<div className='parent' key={index + 1}>
													<div className='poster'>
														<img
															src={`${URL_IMAGE}` + item.poster_path}
															alt='posterOne'
														/>
														<div className='vote-average'>
															<h6 className='mb-0 font-weight-bold'>IMDB</h6>
															<h6>{item.vote_average}</h6>
														</div>
														<div className='title-movie text-center'>
															<h5>{item.original_title}</h5>
															<h6>{item.release_date}</h6>
														</div>
													</div>
												</div>
											</Link>
										</div>
									</div>
								))}
							</div>
						) : (
							<Loading />
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default TopRatedMovies;
