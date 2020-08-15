import React, { useState, useEffect } from 'react';
import './slider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { NowPlayingMovies, URL_IMAGE } from '../../services/movies';
import { Link } from 'react-router-dom';
import Loading from '../loading/loading';

const SliderImg = () => {
	const [movies, setMovies] = useState([]);
	const [loadSpinner, setloadSpinner] = useState(false);
	useEffect(() => {
		getNowPlayingMovies();
	}, []);

	function getNowPlayingMovies() {
		setloadSpinner(true);
		NowPlayingMovies('popular',1)
			.then(({ data }) => {
				setMovies(data.results);
				setloadSpinner(false);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}

	let settings = {
		autoplay: true,
		dots: false,
		infinite: true,
		margin: 10,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				},
			},
		],
	};
	return (
		<div className='slider-image'>
			<h2 className='text-center'>
					Top <span>Movies</span>
				</h2>
			{!loadSpinner ? (
				<Slider {...settings}>
					{movies.map((item, index) => (
						<Link to={`/movie-details/${item.id}`} className='item-link'  key={index + 1}>
							<div className='parent'>
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
										<h5>{item.title}</h5>
										<h6>{item.release_date}</h6>
									</div>
								</div>
							</div>
						</Link>
					))}
				</Slider>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default SliderImg;
