import React, {useEffect} from 'react';
import BreadCumb from '../../Shared/BreadCumb/BreadCumb';
import Loader from '../../Shared/Loader/Loader';
import {useQuery} from '@tanstack/react-query';
import SingleProject from '../../Homes/Projects/SingleProject';
import {useState} from 'react';

const PortFolio = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const btnTexts = ['all', 'dynamic', 'static', 'games'];
	const [active, setActive] = useState(0);
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
		<div>
			<div>
				<BreadCumb data={'Portfolio'}></BreadCumb>
				<div style={{paddingTop: '25rem'}}></div>
			</div>

			<div className="portfolio">
				<div className="container">
					<div className="row">
						<div class="btn-group filter">
							{btnTexts.map((btn, index) => (
								<button
									onClick={() => setActive(index)}
									data-filter={btn === 'all' ? '*' : btn}
									class={`btn ${index === active && 'active'}`}
								>
									{btn}
								</button>
							))}
							{/* <button data-filter="*" class="btn active">
								all
							</button>
							<button class="btn" data-filter=".front">
								front-end
							</button>
							<button class="btn" data-filter=".BE">
								Back-End
							</button>
							<button class="btn" data-filter=".WP">
								WordPress
							</button> */}
						</div>
					</div>
					<div className="row justify-content-center grid">
						{projects.map((project) => (
							<SingleProject key={project._id} project={project}></SingleProject>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortFolio;
