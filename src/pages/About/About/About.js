import React from 'react';
import {useEffect} from 'react';
import BreadCumb from '../../Shared/BreadCumb/BreadCumb';
import Testimonial from '../../Shared/Testimonial/Testimonial';
import AboutMe from '../AboutMe/AboutMe';
import UseTitle from '../../../hooks/UseTitle';
import Technologies from '../Technologies/Technologies';

const About = () => {
	UseTitle('About || Webrabbani');
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<BreadCumb data={'About Me'}> </BreadCumb>
			<AboutMe></AboutMe>
			<Technologies />
			<Testimonial></Testimonial>
		</div>
	);
};

export default About;
