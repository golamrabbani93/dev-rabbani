import React from 'react';
import {Link} from 'react-router-dom';
import myPhoto from '../../../images/me.png';
import './About.scss';
const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-sm-12 about__text">
						<p className="services__top--sub">about</p>
						<h3 className="services__top--main">ABOUT I Love Creating Websites</h3>
						<div className="head-animation">
							<div className="post-heading"></div>
						</div>
						<p className="about__text--description">
							Discreet web developer with over One year of front-end. Experience and a passion for
							responsive website design. Exceptional evaluation, analysis, design, and
							Implementation of client/server. Extremely dedicated, organised, and team-oriented.
						</p>
						<Link className="custom_button m-auto">discover more</Link>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="about__image">
							<img src={myPhoto} alt="" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
