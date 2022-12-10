import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<section className="back_banner"></section>
			<About></About>
		</div>
	);
};

export default Home;
