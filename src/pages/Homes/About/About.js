import React from 'react';
import {Link} from 'react-router-dom';
import myPhoto from '../../../images/me.png';
import './About.scss';
const About = () => {
	return (
		<section class="about">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-12 about__text">
						<p class="services__top--sub">about</p>
						<h3 class="services__top--main">ABOUT I Love Creating Websites</h3>
						<div class="head-animation">
							<div class="post-heading"></div>
						</div>
						<p class="about__text--description">
							I am a web developer. I have created many websites in 4 years. As a web developer, I
							would say that when designing and developing website, we are very careful so that the
							website can rank well in Google. We also consider the ownership of all types of
							websites when creating a website. My programming languages HTML5, PHP, JavaScript,
							CSS3. I am also experience on WordPress.
						</p>
						<Link class="custom_button m-auto">discover more</Link>
					</div>
					<div class="col-md-6 col-sm-12">
						<div class="about__image">
							<img src={myPhoto} alt="" class="img-fluid" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
