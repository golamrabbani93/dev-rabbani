import React from 'react';
import Services from '../Homes/Services/Services';
import BreadCumb from '../Shared/BreadCumb/BreadCumb';

const ServicesPage = () => {
	return (
		<div>
			<BreadCumb data={'Services'}></BreadCumb>
			<div style={{paddingTop: '25rem'}}></div>
			<Services></Services>
		</div>
	);
};

export default ServicesPage;
