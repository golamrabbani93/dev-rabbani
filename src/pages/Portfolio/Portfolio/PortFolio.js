import React, {useEffect} from 'react';
import BreadCumb from '../../Shared/BreadCumb/BreadCumb';
import Projects from '../../Homes/Projects/Projects';

const PortFolio = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<div>
				<BreadCumb data={'Portfolio'}></BreadCumb>
				<div style={{paddingTop: '25rem'}}></div>
			</div>
			<div>
				<Projects btn={'none'}></Projects>
			</div>
		</div>
	);
};

export default PortFolio;
