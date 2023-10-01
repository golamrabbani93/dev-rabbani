import React from 'react';
import {useQuery} from '@tanstack/react-query';
import './Services.scss';
import SingleServices from './SingleServices';
import Bg from '../../../images/banner/banner-service.png';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
const Services = ({btn}) => {
	const {data: services = []} = useQuery({
		queryKey: ['services'],
		queryFn: async () => {
			const res = await fetch('https://webrabbani-server.vercel.app/services');
			const data = await res.json();
			return data;
		},
	});
	const servicesBg = {
		backgroundImage: ` url(${Bg})`,
	};

	return (
		<section className="services" style={servicesBg}>
			<div className="container">
				<div className="row">
					<motion.div
						initial={{y: -200, opacity: 0}}
						whileInView={{y: 0, opacity: 1}}
						transition={{duration: 0.6}}
						className="services__top text-center"
					>
						<p className="services__top--sub">services</p>
						<h3 className="services__top--main">what I do</h3>
						<div className="head-animation">
							<div className="post-heading"></div>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{x: -200, opacity: 0}}
					whileInView={{x: 0, opacity: 1}}
					transition={{duration: 0.6}}
					className="row pad-top"
				>
					{services.map((service) => (
						<SingleServices key={service._id} service={service}></SingleServices>
					))}
				</motion.div>
				<motion.div
					initial={{x: 200, opacity: 0}}
					whileInView={{x: 0, opacity: 1}}
					transition={{duration: 0.6}}
					className={`button text-center pt-5 ${btn === 'none' ? 'd-none' : ''}`}
				>
					<Link to={`services`} className="custom_button m-auto">
						View All Services
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
