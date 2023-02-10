import React from 'react';
import BreadCumb from '../../Shared/BreadCumb/BreadCumb';
import Testimonial from '../../Shared/Testimonial/Testimonial';
import AboutMe from '../AboutMe/AboutMe';
import Biography from '../Biography/Biography';

const About = () => {
	return (
		<div>
			<BreadCumb> </BreadCumb>
			<AboutMe></AboutMe>
			<Biography></Biography>
			<Testimonial></Testimonial>
		</div>
	);
};

export default About;
