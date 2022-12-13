import React from 'react';
import {useQuery} from '@tanstack/react-query';
import './Services.scss';
import SingleServices from './SingleServices';
import Bg from '../../../images/banner/banner-service.png';
const Services = () => {
	const {data: services = []} = useQuery({
		queryKey: ['services'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/services');
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
					<div className="services__top text-center">
						<p className="services__top--sub">services</p>
						<h3 className="services__top--main">what we do</h3>
						<div className="head-animation">
							<div className="post-heading"></div>
						</div>
					</div>
				</div>
				<div className="row pad-top">
					{services.map((service) => (
						<SingleServices key={service._id} service={service}></SingleServices>
					))}
					<div className="button text-center pt-5">
						<a href="#" className="btn custom_button m-auto">
							View All Services
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
