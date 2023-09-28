import React from 'react';
import {Link} from 'react-router-dom';

const SingleProject = ({project}) => {
	const {_id, name, image, live_link} = project;
	return (
		<div className="col-sm-12 col-md-6 col-xl-4 portfolio__items W-0	">
			<div className="item" style={{backgroundImage: `url(${image})`}}>
				<div className="item--text">
					<div className="text-inner">
						<p>
							<Link to={`/project/${_id}`} className="title">
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
			</div>
		</div>
	);
};

export default SingleProject;
