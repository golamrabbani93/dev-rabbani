import React from 'react';
import {HashLoader} from 'react-spinners';
import './Loader.scss';

const Loader = () => {
	return (
		<div className="loader">
			<HashLoader color="#e55137" speedMultiplier={2} />
		</div>
	);
};

export default Loader;
