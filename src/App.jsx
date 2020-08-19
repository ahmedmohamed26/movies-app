import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
import Home from './pages/home/home';
import MovieDetails from './pages/movie-details/movie-details';
import Category from './pages/Category/Category';
 
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Redirect path='/' component={Home} />
				<Route exact path='/' component={Home} />
				<Route exact path='/movies/:type' component={Category} />
				<Route exact path='/movie-details/:id' component={MovieDetails} />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
