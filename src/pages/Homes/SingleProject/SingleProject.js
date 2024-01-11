import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './SingleProject.scss';
import {useEffect} from 'react';
import Loader from '../../Shared/Loader/Loader';
import {motion} from 'framer-motion';
import {HiOutlineExternalLink} from 'react-icons/hi';
import {useQuery} from '@tanstack/react-query';
import UseTitle from '../../../hooks/UseTitle';
const SingleProject = () => {
	const params = useParams();
	const title = params?.name.replace(/-/g, ' ');
	UseTitle(`${title} || Portfolio`);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const {data: project = [], isLoading} = useQuery({
		queryKey: [params?.id],
		queryFn: async () => {
			const res = await fetch(`https://webrabbani-server.vercel.app/project/${params?.id}`);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}
	const {name, site_images, technology, feature, live_link, github_link} = project;
	const allFeauters = feature.split('|');
	return (
		<div className="">
			<div className="extra-margin position-absolute"></div>
			<div className="project  ">
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
					<div className="project-link d-flex justify-content-center">
						<div className="live">
							<span className="link-icon">
								<HiOutlineExternalLink />
								<a
									href={live_link}
									className="title"
									target="_blank"
									rel="noopener noreferrer"
									style={{marginTop: '-20px'}}
								>
									See Live Website
								</a>
							</span>
						</div>
						<div className="github">
							<span className="link-icon">
								<HiOutlineExternalLink />
								<a
									href={github_link[0].client_side}
									className="title"
									target="_blank"
									rel="noopener noreferrer"
									style={{marginTop: '-20px'}}
								>
									{github_link[0]?.server_side ? 'Github Client Side' : 'Github'}
								</a>
							</span>
						</div>
						{github_link[0]?.server_side && (
							<div className="github server">
								<span className="link-icon">
									<HiOutlineExternalLink />
									<a
										href={github_link[0].server_side}
										className="title"
										target="_blank"
										rel="noopener noreferrer"
										style={{marginTop: '-20px'}}
									>
										Github Server Side
									</a>
								</span>
							</div>
						)}
					</div>
					<div className="project_details py-5">
						<div className="project_details--technology">
							<h2 className="text-white">Technology Used In This Project</h2>

							<div className="technology row justify-content-center align-items-center">
								{technology?.map((item, index) => (
									<motion.div
										key={index}
										initial={{y: 200, opacity: 0, scale: 0}}
										whileInView={{y: 0, opacity: 1, scale: 1}}
										transition={{duration: 0.6}}
										className="card flex-column justify-content-center align-items-center"
									>
										{item?.image?.length > 200 ? (
											<img
												className="img-fluid"
												alt=""
												src={`data:image/svg+xml;utf8,${encodeURIComponent(item.image)}`}
											/>
										) : (
											<img className="img-fluid" alt="" src={item.image} />
										)}

										<div className="card-body">
											<h5 className="card-title">{item.name}</h5>
										</div>
									</motion.div>
								))}
							</div>
						</div>
						<div className="project_details--feature">
							<h2 className="text-white">What Features In This Project</h2>
							<div className="row justify-content-center align-items-center">
								{allFeauters?.map((item, index) => {
									return (
										<motion.div
											key={index}
											initial={{y: 200, opacity: 0, scale: 0}}
											whileInView={{y: 0, opacity: 1, scale: 1}}
											transition={{duration: 0.6}}
											className="card flex-column flex-column justify-content-center align-items-center"
										>
											<div className="card-body">
												<h5 className="card-text">{item}</h5>
											</div>
										</motion.div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
