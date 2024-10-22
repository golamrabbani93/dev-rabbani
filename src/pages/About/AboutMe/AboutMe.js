import React from 'react';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import './AboutMe.scss';
import {motion} from 'framer-motion';
const AboutMe = () => {
	return (
		<div className="aboutMe">
			<div className="container">
				<div className="row">
					<motion.div
						initial={{x: -250, opacity: 0}}
						whileInView={{x: 0, opacity: 1}}
						transition={{duration: 0.6}}
						className="col-lg-6 col-12"
					>
						<div className="aboutMe__image">
							<img
								src="https://res.cloudinary.com/dolttvkme/image/upload/v1729609235/my-photo_csyrh6.png"
								alt=""
								className="img-fluid rounded-5"
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{x: 250, opacity: 0}}
						whileInView={{x: 0, opacity: 1}}
						transition={{duration: 0.6}}
						className="col-lg-6 col-12"
					>
						<div className="aboutMe__content">
							<div className="aboutMe__content--text">
								<h4 className="sub">Web developer</h4>
								<h2 className="title">Golam Rabbani</h2>
								<div className="head-animation">
									<div className="post-heading"></div>
								</div>
								<p className="description">
									Dedicated MERN Developer with over one year of front-end experience and a strong
									passion for responsive web design. Proven expertise in the evaluation, analysis,
									design, and implementation of client/server applications. Highly organized,
									committed, and a collaborative team player.....
								</p>
							</div>
							<div className="aboutMe__content--contact ">
								<ul>
									<li>
										<Link href="#">
											<i className="fa-solid fa-phone"></i>01590090608
										</Link>
									</li>
									<li>
										<Link href="#">
											<i className="fa-solid fa-envelope mr-4"></i>golamrabbani9373@gmail.com
										</Link>
									</li>
								</ul>
							</div>
							<div className="aboutMe__content--counter">
								<div className="projects">
									<h3 className="number">
										<CountUp end={25} duration={2} enableScrollSpy={true} />+
									</h3>
									<p>Projects Done</p>
								</div>
								<div className="clients">
									<h3 className="number">
										<CountUp end={3} duration={1} enableScrollSpy={true} />+
									</h3>
									<p>Happy Clients</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
