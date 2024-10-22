import React from 'react';
import {useParams} from 'react-router-dom';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './SingleProject.scss';
import {useEffect} from 'react';
import Loader from '../../Shared/Loader/Loader';
import {motion} from 'framer-motion';
import {HiOutlineExternalLink} from 'react-icons/hi';
import {MdMarkEmailRead} from 'react-icons/md';
import UseTitle from '../../../hooks/UseTitle';
import {useGetSingleProjectQuery} from '../../../redux/features/project/project.management';
import {RiLockPasswordFill} from 'react-icons/ri';
const SingleProject = () => {
	const params = useParams();
	const title = params?.name.replace(/-/g, ' ');
	UseTitle(`${title} || Portfolio`);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const {data: projectData, isLoading} = useGetSingleProjectQuery(params?.id);

	const project = projectData?.data || {};
	if (isLoading) {
		return <Loader></Loader>;
	}
	const {
		name,
		images,
		technologies,
		features,
		liveLink,
		githubClientLink,
		githubServerLink,
		adminEmail,
		adminPassword,
	} = project;

	return (
		<div className="">
			<div className="extra-margin position-absolute"></div>
			<div className="project  ">
				<div className="container ">
					<h2 className="heading-primary--main text-white font-bebas mb-5">{name}</h2>
					<div className="row gap-5 mx-auto justify-content-center text-center mt-5">
						<PhotoProvider>
							{images?.map((item, index) => (
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
					<div className="project-link justify-content-center">
						<div className="live">
							<span className="link-icon">
								<HiOutlineExternalLink />
								<a
									href={liveLink}
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
									href={githubClientLink}
									className="title"
									target="_blank"
									rel="noopener noreferrer"
									style={{marginTop: '-20px'}}
								>
									{githubServerLink !== undefined ? 'Github Client Side' : 'Github'}
								</a>
							</span>
						</div>
						{githubServerLink && (
							<div className="github server">
								<span className="link-icon">
									<HiOutlineExternalLink />
									<a
										href={githubServerLink}
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
					{adminEmail && (
						<div className="project-link justify-content-center mt-3">
							<div className="live">
								<span className="link-icon">
									<span className="title" style={{marginTop: '-20px'}}>
										Admin Credential:
									</span>
								</span>
							</div>
							<div className="github">
								<span className="link-icon">
									<MdMarkEmailRead />
									<span className="title" style={{marginTop: '-20px'}}>
										Email: {adminEmail}
									</span>
								</span>
							</div>
							{githubServerLink && (
								<div className="github server">
									<span className="link-icon">
										<RiLockPasswordFill />
										<span className="title" style={{marginTop: '-20px'}}>
											Password: {adminPassword}
										</span>
									</span>
								</div>
							)}
						</div>
					)}
					<div className="project_details py-5">
						<div className="project_details--technology">
							<h2 className="text-white">Technologies Used In This Project</h2>

							<div className="technology row justify-content-center align-items-center">
								{technologies?.map((item, index) => (
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
							<h2 className="text-white">What's Features In This Project</h2>
							<div className="row justify-content-center align-items-center">
								{features?.map((item, index) => {
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
