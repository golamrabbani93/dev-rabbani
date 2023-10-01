import React from 'react';
import {Link} from 'react-router-dom';
import BreadBG from '../../../images/breadcumb.png';
import './BreadCumb.scss';
import {motion} from 'framer-motion';
const BreadCumb = ({data}) => {
	const Bg = {
		backgroundImage: ` url(${BreadBG})`,
	};
	return (
		<section className="breadcumb" style={Bg}>
			<div className="container">
				<motion.div
					animate={{x: [-400, 30, 0], opacity: [0, 1]}}
					transition={{delay: 0.6, duration: 0.4}}
					className="row"
				>
					<div className="col-xl-12">
						<div className="breadcumb__text">
							<h4>{data}</h4>
							<ul>
								<li>
									<Link to={'/'}>Home</Link>
								</li>
								/<li>{data}</li>
							</ul>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default BreadCumb;
