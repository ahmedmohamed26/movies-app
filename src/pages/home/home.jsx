import React, { useState, useEffect } from 'react';
import './home.scss';
import { NowPlayingMovies, URL_IMAGE } from '../../services/movies';
import coverBackground from '../../assets/images/cover-img.jpg';
import { Container } from 'reactstrap';
import SliderImg from '../../components/slider/slider';
import MoviesCategories from '../../components/movies-categories/moviesCategories';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/loading';
const Home = () => {
	const [allMovies, setAllMovies] = useState([]);
	const [loadSpinner, setloadSpinner] = useState(false);

	useEffect(() => {
		getNowPlayingMovies();
	}, []);

	function getNowPlayingMovies() {
		setloadSpinner(true);
		NowPlayingMovies('top_rated',1)
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

	const getMovies = (props) => {
		console.log(props)
		setloadSpinner(true);
		NowPlayingMovies(props,1)
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
		<section className='home-page'>
			<img className='background-image' src={coverBackground} alt='cover' />
			<Container>
				<SliderImg />
				<div className='row'>
					<div className='col-md-9'>
						<section className='all-categories'>
							<div className='top-rated'>
								<div className='d-flex justify-content-between align-items-center mb-3'>
									<h4 className='mb-0'>top rated</h4>
									<Link className='link-item' to='/'>
										see all top rated
									</Link>
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
																	<h6 className='mb-0 font-weight-bold'>
																		IMDB
																	</h6>
																	<h6>{item.vote_average}</h6>
																</div>

																<div className='title-movie text-center'>
																	<h5>{item.title}</h5>
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
						</section>
					</div>
					<div className='col-md-3'>
						<MoviesCategories getMovies={getMovies} />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Home;
