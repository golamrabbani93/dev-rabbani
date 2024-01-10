import React from 'react';
import './Banner.scss';
import banner from '../../../images/banner/banner-2.jpg';
import devImage from '../../../images/banner/devimage.png';
import dotImage from '../../../images/banner/small-dot1.png';
import reactLogo from '../../../images/banner/react-logo.png';
import {motion} from 'framer-motion';
import {Typewriter} from 'react-simple-typewriter';
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
							<motion.span
								animate={{x: [-200, 0], opacity: [0, 1]}}
								transition={{delay: 1, duration: 0.6}}
								className="heading-primary--sub m-0"
							>
								<Typewriter words={['Front End', 'React', 'Web']} loop={true} typeSpeed={120} />{' '}
								Developer
							</motion.span>
							<motion.span
								animate={{x: [200, 0], opacity: [0, 1]}}
								transition={{delay: 1, duration: 0.6}}
								className="heading-primary--main "
							>
								Rabbani
							</motion.span>
						</h1>
						<motion.a
							animate={{y: [50, 0], opacity: [0, 1]}}
							transition={{delay: 1, duration: 0.2}}
							href="https://drive.google.com/file/d/1Ylj7u6tyoVKY-nIW_5bnoFrJGrybY86h/view?usp=sharing"
							className=" custom_button"
							target="_blank"
							rel="noopener noreferrer"
							style={{marginTop: '-20px'}}
						>
							Download cv
						</motion.a>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="banner__hover">
					<motion.img
						animate={{y: [-100, 0], opacity: [0, 1]}}
						transition={{delay: 1, duration: 0.4}}
						className="img devimage img-fluid"
						src={devImage}
						alt=""
					/>
					<motion.img
						animate={{opacity: [0, 1]}}
						transition={{delay: 1, duration: 0.4}}
						className="react img-fluid "
						src={reactLogo}
						alt=""
					/>

					<img className="img dot img-fluid" src={dotImage} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
