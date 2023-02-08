import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Testimonial from '../../Shared/Testimonial/Testimonial';
import About from '../About/About';
import Banner from '../Banner/Banner';
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
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
