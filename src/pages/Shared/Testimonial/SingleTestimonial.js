import React from 'react';

const SingleTestimonial = ({testimonial}) => {
	const {qoute_img, author_designation, author_img, author_name, description} = testimonial;
	return (
		<div className="testimonial__item text-center text-white">
			<img src={qoute_img} className="testimonial__item--image" alt="" />
			<p className="testimonial__item--content">{description}</p>
			<div className="testimonial__item--data d-flex flex-wrap">
				<img src={author_img} alt={author_name} />
				<div className="data-content">
					<h4 className="name">{author_name}</h4>
					<p className="desinagtion">{author_designation}</p>
				</div>
			</div>
		</div>
	);
};

export default SingleTestimonial;
