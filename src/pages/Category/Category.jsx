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
		window.scrollTo({
			top: 0,
			left: 0,
		});
		getNowPlayingMovies();
	}, [ActivePage, props]);

	function getNowPlayingMovies() {
		setloadSpinner(true);
		NowPlayingMovies(type, ActivePage)
			.then(({ data }) => {
				setAllMovies(data.results);
				setTotalPages(data.total_pages);
				setloadSpinner(false);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}

	const handleSelected = (selectedPage) => {
		setActivePage(selectedPage);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<section className='category'>
			<Container>
				<div className='col-md-12'>
					{!loadSpinner ? (
						<div className='row'>
							{allMovies.map((item, index) => (
								<div className='col-md-3 col-xs-6 col-sm-6' key={index}>
									<div className='parent'>
										<Link
											to={`/movie-details/${item.id}`}
											className='item-link'>
											<div className='list-details' key={index + 1}>
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
						</div>
					) : (
						<Loading />
						)}
				<PaginationComponent
						className='w-100  d-flex flex-wrap'
						totalItems={totalPages}
						pageSize={5}
						onSelect={handleSelected}
						maxPaginationNumbers={5}
						defaultActivePage={ActivePage}
					/>
					
				</div>
	
			</Container>
		</section>
	);
};

export default Category;
