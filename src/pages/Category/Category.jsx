import React, { useState, useEffect } from 'react';
import './Category.scss';
import { NowPlayingMovies, URL_IMAGE } from '../../services/movies';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/loading';
import { Container } from 'reactstrap';
import PaginationComponent from 'react-reactstrap-pagination';

const Category = (props) => {
	const { type } = props.match.params;
	const [allMovies, setAllMovies] = useState([]);
	const [ActivePage, setActivePage] = useState(1);
	const [totalPages, setTotalPages] = useState(5);
	const [loadSpinner, setloadSpinner] = useState(false);
	useEffect(() => {
		getNowPlayingMovies();
		console.log(props);
	}, [ActivePage,props]); 

	function getNowPlayingMovies() { 
		setloadSpinner(true);
		NowPlayingMovies(type, ActivePage)
			.then(({ data }) => {
				console.log(data);
				setAllMovies(data.results);
				setTotalPages(data.total_pages)
				setloadSpinner(false);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}

	const handleSelected = (selectedPage) => {
		setActivePage(selectedPage);
	  }

	return (
		<section className='top-rated-section'>
			<Container>
				<div className='col-md-12'>
					<div className='top-rated'>
						<div className='d-flex justify-content-between align-items-center mb-3'>
							<h4 className='mb-0'>top rated</h4>
						</div>
						{!loadSpinner ? (
							<div className='row'>
								{allMovies.map((item, index) => (
									<div className='col-md-3 col-xs-6 col-sm-6' key={index}>
										<div className='parent'>
											<Link to={`/movie-details/${item.id}`}  className='item-link'>
												<div className='parent' key={index + 1}>
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
										</div>
									</div>
								))}
								<PaginationComponent
									className='w-100'
 									totalItems={totalPages}
									pageSize={5}
									onSelect={handleSelected}
									maxPaginationNumbers={5}
									defaultActivePage={ActivePage}
								/>
							</div>
						) : (
							<Loading />
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Category;
