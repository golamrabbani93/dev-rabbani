import React from 'react';
import Services from '../Homes/Services/Services';
import BreadCumb from '../Shared/BreadCumb/BreadCumb';
import Brand from './Brand/Brand';

const ServicesPage = () => {
	return (
		<div>
			<BreadCumb data={'Services'}></BreadCumb>
			<div style={{paddingTop: '25rem'}}></div>
			<Services></Services>
			<Brand></Brand>
		</div>
	);
};

export default ServicesPage;
