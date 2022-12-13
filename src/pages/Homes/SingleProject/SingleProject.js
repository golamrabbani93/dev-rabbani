import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {useParams} from 'react-router-dom';
import './SingleProject.scss';
const SingleProject = () => {
	const id = useParams();
	console.log('🚀🚀: SingleProject -> id', id);
	const {data: project = [], isLoading} = useQuery({
		queryKey: [id.id],
		queryFn: async () => {
			const res = await fetch(`https://server.webrabbani.com/project/${id.id}`);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <h2>loading..........</h2>;
	}
	const {feature, name, site_images, technology} = project;
	return (
		<div className="project position-absolute top-0 ">
			<div className="container ">
				<h2 className="heading-primary--main text-white font-bebas mb-5">{name}</h2>
				<div className="row gap-5 mx-auto text-center">
					{site_images?.map((image) => (
						<div className="project-image p-5 col-md-3 col-12">
							<img src={image} alt="" width={`300px`} height={`auto`} />
						</div>
					))}
				</div>
				<div className="project_details pb-5">
					<h3 className="text-white fe">
						<span className="me-4" style={{color: '#D94D3A'}}>
							Technology Used:
						</span>
						{technology}
					</h3>
					<h3 className="text-white fe">
						<span className="me-4" style={{color: '#D94D3A'}}>
							Feature:
						</span>
						{feature}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
