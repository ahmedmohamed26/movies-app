import React, { useState, useEffect } from 'react';
import './home.scss';
import { NowPlayingMovies, URL_IMAGE } from '../../services/movies';
import coverBackground from '../../assets/images/cover-img.jpg';
import { Container } from 'reactstrap';
import SliderImg from '../../components/slider/slider';
import ListCategories from '../../components/listCategories/ListCategories';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/loading';
const Home = (props) => {

	const [allMovies, setAllMovies] = useState([]);
	const [titleCategory, setTitleCategory] = useState('popular');
	const [categoryType, setCategoryType] = useState('popular');
	const [loadSpinner, setloadSpinner] = useState(false);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		  });
		getNowPlayingMovies();
	}, []);

	function getNowPlayingMovies() {
		setloadSpinner(true);
		NowPlayingMovies('popular',1)
			.then(({ data }) => {
				setAllMovies(data.results);
				setloadSpinner(false);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}

	const getMovies = (props) => {
		window.scrollTo({
			top: 650,
			left: 0,
			behavior: 'smooth'
		  });
		setloadSpinner(true);
		NowPlayingMovies(props.type,1)
			.then(({ data }) => {
				setTitleCategory(props.title)
				setCategoryType(props.type)
				setAllMovies(data.results);
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
					<div className='col-md-9 '>
						<section className='all-categories'>
							<div className='top-rated'>
								<div className='d-flex justify-content-between align-items-center mb-3'>
									<h4 className='mb-0'>{titleCategory}</h4>
									<Link className='link-item' to={`movies/${categoryType}`}>
										see all <span>{titleCategory}</span> movies
									</Link>
								</div>
								{!loadSpinner ? (
									<div className='row'>
										{allMovies.map((item, index) => (
											<div className='col-md-3 col-xs-6'  key={index + 1}>
												<div className='parent'>
													<Link to={`/movie-details/${item.id}`} className='item-link'>
														<div className='image-cover'>
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
						<ListCategories getMovies={getMovies} />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Home;
