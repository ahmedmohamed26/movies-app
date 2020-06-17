import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';

import Home from './pages/home/home';
import About from './pages/about/about';
import DetailsMovie from './pages/details-movie/details-movie';
import MoviesCategories from './components/movies-categories/moviesCategories';
import NowPlaying from './pages/now-playing/nowPlaying';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
							<Redirect to='/home' />
							<Route exact path='/home' component={Home} />
							<Route exact path='/details-movie' component={DetailsMovie} />
							<Route exact path='/home/now-playing' component={NowPlaying} />
							<Route exact path='/about' component={About} />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
