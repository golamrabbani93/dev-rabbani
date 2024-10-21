import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Link} from 'react-router-dom';
import './Projects.scss';
import SingleProject from './SingleProject';
import Loader from '../../Shared/Loader/Loader';
import {motion} from 'framer-motion';
import {useGetAllProjectQuery} from '../../../redux/features/project/project.management';
const Projects = ({btn}) => {
	const {data: projects = [], isLoading} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch('https://webrabbani-server.vercel.app/projects?count=fast3');
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
					<motion.div
						initial={{y: 200, opacity: 0}}
						whileInView={{y: 0, opacity: 1}}
						transition={{duration: 0.6}}
						className="portfolio__text text-center"
					>
						<p className="services__top--sub">Portfolios</p>
						<h3 className="services__top--main">Recent Completed Projects</h3>
						<div className="head-animation">
							<div className="post-heading"></div>
						</div>
					</motion.div>
				</div>
				<motion.div
					initial={{scale: 0}}
					whileInView={{scale: 1, overflowX: 'hidden'}}
					transition={{duration: 0.6}}
					className="row justify-content-center"
				>
					{projects.slice(0, 3).map((project) => (
						<SingleProject key={project._id} project={project}></SingleProject>
					))}
				</motion.div>
				<motion.div
					initial={{x: -200, opacity: 0}}
					whileInView={{x: 0, opacity: 1}}
					transition={{duration: 0.6}}
					className={`button text-center pt-5 ${btn === 'none' ? 'd-none' : ''}`}
				>
					<Link to={`/portfolio`} className="custom_button m-auto">
						View All Projects
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
