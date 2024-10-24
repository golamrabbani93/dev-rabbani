import {useQuery} from '@tanstack/react-query';
import React from 'react';
import Slider from 'react-slick';
import './Brand.scss';
import SingleBrand from './SingleBrand';
import {motion} from 'framer-motion';
const Brand = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		initialSlide: 0,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	// *Load API
	const {data: brands = []} = useQuery({
		queryKey: ['brands'],
		queryFn: async () => {
			const res = await fetch('https://webrabbani-server.vercel.app/brands');
			const data = await res.json();
			return data;
		},
	});
	return (
		<section className="brand">
			<motion.div
				initial={{scale: 0}}
				whileInView={{scale: 1}}
				transition={{duration: 0.6}}
				className="container"
			>
				<div className="row">
					<Slider {...settings}>
						{brands.map((brand) => (
							<SingleBrand key={brand._id} brand={brand}></SingleBrand>
						))}
					</Slider>
				</div>
			</motion.div>
		</section>
	);
};

export default Brand;
