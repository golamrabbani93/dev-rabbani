import React from 'react';
import {useEffect} from 'react';
import BreadCumb from '../../Shared/BreadCumb/BreadCumb';
import Testimonial from '../../Shared/Testimonial/Testimonial';
import AboutMe from '../AboutMe/AboutMe';
import Biography from '../Biography/Biography';
import UseTitle from '../../../hooks/UseTitle';

const About = () => {
	UseTitle('About || Webrabbani');
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<BreadCumb data={'About Me'}> </BreadCumb>
			<AboutMe></AboutMe>
			{/* <Biography></Biography> */}
			<Testimonial></Testimonial>
		</div>
	);
};

export default About;
