import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
const SingleProject = ({project}) => {
	const {_id, name, image, live_link, status} = project;
	return (
		<motion.div
			layout
			initial={{y: 20, scale: 0, opacity: 0}}
			animate={{y: 0, scale: 1, opacity: 1}}
			exit={{y: -10, scale: 0, opacity: 0}}
			transition={{duration: 0.3}}
			className="col-sm-12 col-md-6 col-xl-4 portfolio__items W-0	"
		>
			<div className="item" style={{backgroundImage: `url(${image})`}}>
				<div className="item--text">
					<div className="text-inner">
						<p>
							<Link to={`/project/${name.toLowerCase()}/${_id}`} className="title">
								{name} <small>Details</small>
							</Link>
							<a
								href={live_link}
								className="title"
								target="_blank"
								rel="noopener noreferrer"
								style={{marginTop: '-20px'}}
							>
								<br />
								<span className="sub">Click here to Live Site</span>
							</a>
						</p>
					</div>
				</div>
				{status && (
					<div className="ongoing">
						<p>Ongoing</p>
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default SingleProject;
