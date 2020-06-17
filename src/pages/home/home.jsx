import React from 'react';
import './home.scss';
import AllMovies from '../../components/all-movies/allMovies';
import coverBackground from '../../assets/images/cover-img.jpg';
import { Container } from 'reactstrap';
import SliderImg from '../../components/slider/slider';
import MoviesCategories from '../../components/movies-categories/moviesCategories';
const Home = () => {
	return (
		<section className='home-page'>
			<img className='background-image' src={coverBackground} alt='cover' />
			<Container>
				<SliderImg />
				<div className='row'>
					<div className='col-md-9'>
						<AllMovies />
					</div>
					<div className='col-md-3'>
						<MoviesCategories />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Home;
