import React, {useEffect} from 'react';
import Services from '../Homes/Services/Services';
import BreadCumb from '../Shared/BreadCumb/BreadCumb';
import Brand from './Brand/Brand';

const ServicesPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<BreadCumb data={'Services'}></BreadCumb>
			<div style={{paddingTop: '25rem'}}></div>
			<Services btn={'none'}></Services>
			<Brand></Brand>
		</div>
	);
};

export default ServicesPage;
