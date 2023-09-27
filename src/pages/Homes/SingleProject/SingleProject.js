import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {useParams} from 'react-router-dom';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './SingleProject.scss';
import {useEffect} from 'react';
const SingleProject = () => {
	const id = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const {data: project = [], isLoading} = useQuery({
		queryKey: [id.id],
		queryFn: async () => {
			const res = await fetch(`https://webrabbani-server.vercel.app/project/${id.id}`);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <h2>loading..........</h2>;
	}
	const {name, site_images, technology} = project;
	return (
		<div>
			<div className="project position-absolute ">
				<div className="container ">
					<h2 className="heading-primary--main text-white font-bebas mb-5">{name}</h2>
					<div className="row gap-5 mx-auto justify-content-center text-center mt-5">
						<PhotoProvider>
							{site_images.map((item, index) => (
								<PhotoView key={index} src={item}>
									{index < 3 ? (
										<img
											className="slide-img pb-5"
											src={item}
											alt=""
											width={`300px`}
											height={`auto`}
										/>
									) : undefined}
								</PhotoView>
							))}
						</PhotoProvider>
					</div>
					<div className="project_details py-5">
						<h2 className="text-white">Technology Used In This Project</h2>

						<div className="technology row ">
							{technology?.map((item) => (
								<div class="card justify-content-center align-items-center flex-column">
									{item?.image?.length > 200 ? (
										<img alt="" src={`data:image/svg+xml;utf8,${encodeURIComponent(item.image)}`} />
									) : (
										<img alt="" src={item.image} />
									)}

									<div class="card-body">
										<h5 class="card-title">{item.name}</h5>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="extra-margin"></div>
		</div>
	);
};

export default SingleProject;
