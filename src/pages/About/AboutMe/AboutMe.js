import React from 'react';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import './AboutMe.scss';

const AboutMe = () => {
	return (
		<div className="aboutMe">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-12">
						<div className="aboutMe__image">
							<img src="https://i.ibb.co/6Z6fsTW/My-photo.png" alt="" />
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="aboutMe__content">
							<div className="aboutMe__content--text">
								<h4 className="sub">Web developer</h4>
								<h2 className="title">Golam Rabbani</h2>
								<div className="head-animation">
									<div className="post-heading"></div>
								</div>
								<p className="description">
									A Web Developer specializing in both front-end back-end development. Experienced
									with all stages of the development cycle for dynamic web projects. Well- versed in
									numerous programming languages including HTML5, PHP, JavaScript, CSS. I am also
									experience on WordPress and Woocommerce.
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
										<CountUp end={25} duration={2} enableScrollSpy={true} />
									</h3>
									<p>Projects Done</p>
								</div>
								<div className="clients">
									<h3 className="number">
										<CountUp end={15} duration={2} enableScrollSpy={true} />
									</h3>
									<p>Happy Clients</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
