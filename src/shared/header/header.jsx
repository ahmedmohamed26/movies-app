import React from 'react';
import { Navbar } from 'reactstrap';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.scss';
import coverBackground from '../../assets/images/cover-img.jpg';

const Header = () => {
	return (
		<header>
			<Navbar className='navbar'>
				<Container>
					<NavLink className='navbar-brand' to='/home'>
						Movies App
					</NavLink>
					<ul className='list-unstyled'>
						<li>
							<NavLink exact className='nav-item' to='/home'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink exact className='nav-item' to='/about'>
								About
							</NavLink>
						</li>
						<li>
							<NavLink exact className='nav-item' to='/top-rated'>
								top rated
							</NavLink>
						</li>
						
					</ul>
				</Container>
			</Navbar>
			<img src={coverBackground} alt='cover' />
		</header>

	);
};

export default Header;
