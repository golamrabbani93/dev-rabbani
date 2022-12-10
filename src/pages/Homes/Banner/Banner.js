import React from 'react';
import './Banner.scss';
import banner from '../../../images/banner/banner-2.jpg';
import devImage from '../../../images/banner/devimage.png';
import dotImage from '../../../images/banner/small-dot1.png';
import reactLogo from '../../../images/banner/react-logo.png';
const Banner = () => {
	const bannerStyle = {
		backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${banner})`,
	};
	return (
		<section className="banner" style={bannerStyle}>
			<div className="container">
				<div className="row">
					<div className="banner__banner-text text-center">
						<h1 className="heading-primary">
							<span className="heading-primary--sub m-0">Web Developer</span>
							<span className="heading-primary--main m-0">Rabbani</span>
						</h1>
						<a
							href="https://drive.google.com/file/d/1oxdlyk0f3CHNwjvDxV6sXLu2WXMyPiIW/view?usp=sharing"
							className=" custom_button"
							target="_blank"
							rel="noopener noreferrer"
							style={{marginTop: '-20px'}}
						>
							Download cv
						</a>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="banner__hover">
					<img className="img devimage img-fluid" src={devImage} alt="" />
					<img className="react img-fluid " src={reactLogo} alt="" />

					<img className="img dot img-fluid" src={dotImage} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
