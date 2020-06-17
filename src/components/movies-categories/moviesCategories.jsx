import React from 'react';
import './movies-categories.scss';
import {Link} from 'react-router-dom';

const MoviesCategories = () => {

	return (
			<section className='movies-categories'>
				<ul className='list-unstyled'>
					<Link className='nav-item' to='/home'>
						<h6>Top Rated</h6>
					</Link>
					<Link className='nav-item' to='/home/now-playing'>
						<h6>Now Playing</h6>
					</Link>
				</ul>
			</section>
	);
};

export default MoviesCategories;
