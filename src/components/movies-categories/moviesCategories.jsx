import React from 'react';
import './movies-categories.scss';

const MoviesCategories = (props) => {
	return (
		<section className='movies-categories'>
			<ul className='list-unstyled'>
				<li  className='nav-item'>
					<h6 onClick={() => props.getMovies({type:'now_playing',title:'Now Playing'})}>Now Playing</h6>
				</li>
				<li  className='nav-item'>
					<h6 onClick={() => props.getMovies({type:'top_rated',title:'Top Rated'})}>Top Rated</h6>
				</li>
				<li  className='nav-item'>
					<h6 onClick={() => props.getMovies({type:'upcoming',title:'Upcoming'})}>Upcoming</h6>
				</li>
				<li  className='nav-item'>
					<h6 onClick={() => props.getMovies({type:'popular',title:'Popular'})}>Popular</h6>
				</li>
				{/* <Link className='nav-item'>
					<h6 onClick={() => props.getTvShow('top_rated')}>Top Rated</h6>
				</Link> */}
			</ul>
		</section>
	);
};

export default MoviesCategories;
