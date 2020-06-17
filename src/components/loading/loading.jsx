import React from 'react';
import { Spinner } from 'reactstrap';
import './loading.scss';

const Loading = () => {
	return (
		<div className='loading-spinner'>
			<Spinner animation='border' />
		</div>
	);
};
export default Loading;
