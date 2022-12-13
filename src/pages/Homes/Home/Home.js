import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<section className="back_banner"></section>
			<About></About>
			<Projects></Projects>
			<Services></Services>
			<Contact></Contact>
		</div>
	);
};

export default Home;
