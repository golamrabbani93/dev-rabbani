import React from 'react';
import {Link} from 'react-router-dom';
import './AboutMe.scss';

const AboutMe = () => {
	return (
		<div class="aboutMe">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-12">
						<div class="aboutMe__image">
							<img src="https://i.ibb.co/6Z6fsTW/My-photo.png" alt="" />
						</div>
					</div>
					<div class="col-lg-6 col-12">
						<div class="aboutMe__content">
							<div class="aboutMe__content--text">
								<h4 class="sub">Web developer</h4>
								<h2 class="title">Golam Rabbani</h2>
								<div class="head-animation">
									<div class="post-heading"></div>
								</div>
								<p class="description">
									A Web Developer specializing in both front-end back-end development. Experienced
									with all stages of the development cycle for dynamic web projects. Well- versed in
									numerous programming languages including HTML5, PHP, JavaScript, CSS. I am also
									experience on WordPress and Woocommerce.
								</p>
							</div>
							<div class="aboutMe__content--contact">
								<ul>
									<li>
										<Link href="#">
											<i class="fa-solid fa-phone"></i>01590090608
										</Link>
									</li>
									<li>
										<Link href="#">
											<i class="fa-solid fa-envelope mr-4"></i>golamrabbani9373@gmail.com
										</Link>
									</li>
								</ul>
							</div>
							<div class="aboutMe__content--counter">
								<div class="projects">
									<h3 class="number">25</h3>
									<p>Projects Done</p>
								</div>
								<div class="clients">
									<h3 class="number">15</h3>
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
