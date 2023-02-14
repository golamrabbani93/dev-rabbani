import React, {useEffect} from 'react';
import BreadCumb from '../../Shared/BreadCumb/BreadCumb';

const PortFolio = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<BreadCumb data={'Portfolio'}></BreadCumb>
		</div>
	);
};

export default PortFolio;
