import React from 'react';
import {Link} from 'react-router-dom';
import BreadBG from '../../../images/breadcumb.png';
import './BreadCumb.scss';
const BreadCumb = () => {
	const Bg = {
		backgroundImage: ` url(${BreadBG})`,
	};
	return (
		<section className="breadcumb" style={Bg}>
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<div className="breadcumb__text">
							<h4>About Me</h4>
							<ul>
								<li>
									<Link to={'/'}>Home</Link>
								</li>
								/<li>About Me</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BreadCumb;
