import React from 'react';
import './movies-categories.scss';

const MoviesCategories = (props) => {
	const categoryName = (type, title, categoryName) => {
		props.getMovies({ type: type, title: title, categoryName: categoryName });
	};

	return (
		<section className='movies-categories'>
			<ul className='list-unstyled'>
				<li className='nav-item'>
					<h6
						onClick={() =>
							categoryName('now_playing', 'Now Playing', 'now-playing')
						}>
						Now Playing
					</h6>
				</li>
				<li className='nav-item'>
					<h6
						onClick={() => categoryName('top_rated', 'Top Rated', 'top-rated')}>
						Top Rated
					</h6>
				</li>
				<li className='nav-item'>
					<h6 onClick={() => categoryName('upcoming', 'Upcoming', 'upcoming')}>
						Upcoming
					</h6>
				</li>
				<li className='nav-item'>
					<h6 onClick={() => categoryName('popular', 'Popular', 'popular')}>
						Popular
					</h6>
				</li>
				{/* <Link className='nav-item'>
					<h6 onClick={() => props.getTvShow('top_rated')}>Top Rated</h6>
				</Link> */}
			</ul>
		</section>
	);
};

export default MoviesCategories;
