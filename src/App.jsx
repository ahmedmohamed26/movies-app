import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';

import Home from './pages/home/home';
import About from './pages/about/about';
import MovieDetails from './pages/movie-details/movie-details';
import TopRatedMovies from './pages/top-rated/topRated';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				{/* <Redirect to='/home' /> */}
				<Route exact path='/home' component={Home} />
				<Route exact path='/top-rated' component={TopRatedMovies} />
				<Route exact path='/movie-details/:id' component={MovieDetails} />
				<Route exact path='/about' component={About} />

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
