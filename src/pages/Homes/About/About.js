import React from 'react';
import {Link} from 'react-router-dom';
import './About.scss';
import {motion} from 'framer-motion';
const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="row ">
					<motion.div
						initial={{x: -300, opacity: 0}}
						whileInView={{x: 0, opacity: 1}}
						transition={{duration: 0.6}}
						className="col-md-6 col-sm-12 about__text"
					>
						<p className="services__top--sub">about</p>
						<h3 className="services__top--main">I Love Creating Websites</h3>
						<div className="head-animation">
							<div className="post-heading"></div>
						</div>
						<p className="about__text--description">
							Discreet web developer with over One year of front-end. Experience and a passion for
							responsive website design. Exceptional evaluation, analysis, design, and
							Implementation of client/server. Extremely dedicated, organised, and team-oriented.
						</p>
						<Link className="custom_button m-auto">discover more</Link>
					</motion.div>
					<motion.div
						initial={{x: 300, opacity: 0}}
						whileInView={{x: 0, opacity: 1}}
						transition={{duration: 0.6}}
						className="col-md-6 col-sm-12"
					>
						<div className="about__image">
							<img src="https://i.ibb.co/6Z6fsTW/My-photo.png" alt="" className="img-fluid" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
