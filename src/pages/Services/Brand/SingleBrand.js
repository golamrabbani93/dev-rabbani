import React from 'react';

const SingleBrand = ({brand}) => {
	const {img} = brand;
	return (
		<div className="brand-wrapper">
			<div className="single-brand ">
				<img src={img} alt="Brand-2" />
			</div>
		</div>
	);
};

export default SingleBrand;
