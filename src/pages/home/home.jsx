import React from 'react';
import './home.scss';
import AllMovies from '../../components/all-movies/allMovies';

const Home = () => {
	return (
		<section className='home-page'>
					<div className='col-md-12'>
						<AllMovies/>
					</div>
		</section>
	);
};

export default Home;
