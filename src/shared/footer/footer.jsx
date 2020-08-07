import React from 'react';
import './footer.scss';

const Footer = () => {
        const Year = new Date().getFullYear()

	return (
        <footer className='text-center'>
                        <h6>Copyright © {Year} </h6>
        </footer>

	);
};

export default Footer;
