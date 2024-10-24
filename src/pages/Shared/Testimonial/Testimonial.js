import React from 'react';
import Slider from 'react-slick';
import './Testimonial.scss';
import {useQuery} from '@tanstack/react-query';
import SingleTestimonial from './SingleTestimonial';
import {motion} from 'framer-motion';
const Testimonial = () => {
	// *Load API
	const {data: testimonials = []} = useQuery({
		queryKey: ['testimonials'],
		queryFn: async () => {
			const res = await fetch('https://webrabbani-server.vercel.app/testimonials');
			const data = await res.json();
			return data;
		},
	});
	var settings = {
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 3000,
	};
	const Bg = 'https://i.ibb.co/3cxtKFR/bg.jpg';
	const testimonialBg = {
		backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Bg})`,
	};
	return (
		<section className="testimonial" style={testimonialBg}>
			<motion.div
				initial={{scale: 0}}
				whileInView={{scale: 1}}
				transition={{duration: 0.6}}
				className="container"
			>
				<div className="row">
					<Slider {...settings} className="">
						{testimonials.map((testimonial) => (
							<SingleTestimonial
								key={testimonial._id}
								testimonial={testimonial}
							></SingleTestimonial>
						))}
					</Slider>
				</div>
			</motion.div>
		</section>
	);
};

export default Testimonial;
