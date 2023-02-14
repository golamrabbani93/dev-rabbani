import React, {useEffect} from 'react';
import Testimonial from '../../Shared/Testimonial/Testimonial';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Banner></Banner>
			<section className="back_banner"></section>
			<About></About>
			<Projects btn={'block'}></Projects>
			<Services btn={'block'}></Services>
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
