import React from 'react';

const SingleServices = ({service}) => {
	const {description, hover_img, main_img, title} = service;
	return (
		<div className="col-sm-12 col-md-4 col-xl-4">
			<div className="services__item">
				<div className="item">
					<div className="item__images">
						<img src={main_img} alt="" className="main-image" />
						<img src={hover_img} alt="" className="hover-image" />
					</div>
					<div className="item__text">
						<h2 className="item__text--title">{title}</h2>
						<p className="item__text--sub">{description?.slice(0, 150)}....</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleServices;
