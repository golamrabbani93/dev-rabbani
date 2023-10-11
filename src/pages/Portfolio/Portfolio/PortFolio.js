import React, {useEffect} from 'react';
import BreadCumb from '../../Shared/BreadCumb/BreadCumb';
import Loader from '../../Shared/Loader/Loader';
import {useQuery} from '@tanstack/react-query';
import SingleProject from '../../Homes/Projects/SingleProject';
import {useState} from 'react';
import {motion} from 'framer-motion';
import UseTitle from '../../../hooks/UseTitle';
const PortFolio = () => {
	UseTitle('Portfolio || Webrabbani');
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const btnTexts = ['all', 'dynamic', 'static', 'games'];
	const [active, setActive] = useState('all');
	const [projects, setProjects] = useState([]);
	const [filterProjects, SetFilterProjects] = useState([]);
	// !Load projects from Database
	useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch('https://webrabbani-server.vercel.app/projects');
			const data = await res.json();
			setProjects(data);
			SetFilterProjects(data);
		},
	});

	// !Handle Filter
	const handelFilter = (e, index) => {
		const btnValue = e.target.innerText;
		setActive(btnValue);
		if (btnValue === 'all') {
			SetFilterProjects(projects);
			return;
		}
		const filterdItems = projects.filter((project) => project.filter.includes(btnValue));
		SetFilterProjects(filterdItems);
	};
	if (filterProjects.length === 0) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<div>
				<BreadCumb data={'Portfolio'}></BreadCumb>
				<div style={{paddingTop: '25rem'}}></div>
			</div>

			<div className="portfolio">
				<div className="container">
					<div className="row">
						<motion.div
							initial={{scale: 0, opacity: 0}}
							whileInView={{scale: 1, opacity: 1}}
							transition={{delay: 0.3, duration: 0.4}}
							viewport={{once: true}}
							className="btn-group filter"
						>
							{btnTexts.map((btn, index) => (
								<button
									key={index}
									onClick={(e) => handelFilter(e, index)}
									data-filter={btn === 'all' ? '*' : btn}
									className={`btn ${btn === active && 'active'}`}
								>
									{btn}
								</button>
							))}
						</motion.div>
					</div>
					<motion.div
						layout
						initial={{y: -200, opacity: 0}}
						whileInView={{y: 0, opacity: 1}}
						transition={{duration: 0.6}}
						className="row justify-content-center grid"
					>
						{filterProjects.map((project) => (
							<SingleProject key={project._id} project={project}></SingleProject>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default PortFolio;
