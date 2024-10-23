import React, {useEffect} from 'react';
import Testimonial from '../../Shared/Testimonial/Testimonial';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import UseTitle from '../../../hooks/UseTitle';
import Blogs from '../Blogs/Blogs';

const Home = () => {
	UseTitle('Home || Webrabbani');
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Banner></Banner>
			<section className="back_banner"></section>
			<About></About>
			<Projects btn={'block'}></Projects>
			<Blogs />
			<Services btn={'block'}></Services>
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
