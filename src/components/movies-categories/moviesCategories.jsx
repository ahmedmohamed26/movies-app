import React from 'react';
import './movies-categories.scss';
import {Link} from 'react-router-dom';

const MoviesCategories = (props) => {

	return (
			<section className='movies-categories'>
				<ul className='list-unstyled'>
					<Link className='nav-item'>
						<h6 onClick={() => props.getMovies('top_rated')}>Top Rated</h6>
					</Link>
					<Link className='nav-item'>
						<h6  onClick={() => props.getMovies('now_playing')} >Now Playing</h6>
					</Link>
				</ul>
			</section>
	);
};

export default MoviesCategories;
