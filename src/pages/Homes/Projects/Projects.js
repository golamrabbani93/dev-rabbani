import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Link} from 'react-router-dom';
import './Projects.scss';
import SingleProject from './SingleProject';
import Loader from '../../Shared/Loader/Loader';
const Projects = ({btn}) => {
	const {data: projects = [], isLoading} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch('https://webrabbani-server.vercel.app/projects');
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}

	return (
		<section className="portfolio">
			<div className="container">
				<div className="row">
					<div className="portfolio__text text-center">
						<p className="services__top--sub">Portfolios</p>
						<h3 className="services__top--main">Recent Completed Projects</h3>
						<div className="head-animation">
							<div className="post-heading"></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					{projects.map((project) => (
						<SingleProject key={project._id} project={project}></SingleProject>
					))}

					<div className={`button text-center pt-5 ${btn === 'none' ? 'd-none' : ''}`}>
						<Link className="custom_button m-auto">View All Projects</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
