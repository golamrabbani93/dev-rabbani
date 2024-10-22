import React from 'react';
import {Link} from 'react-router-dom';
import './About.scss';
import {motion} from 'framer-motion';
const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div
					className="row"
					style={{
						alignItems: 'center',
					}}
				>
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
							Dedicated MERN Developer with over one year of front-end experience and a strong
							passion for responsive web design. Proven expertise in the evaluation, analysis,
							design, and implementation of client/server applications. Highly organized, committed,
							and a collaborative team player....
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
							<img
								src="https://res.cloudinary.com/dolttvkme/image/upload/v1729609235/my-photo_csyrh6.png"
								alt=""
								className="img-fluid rounded-5"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
