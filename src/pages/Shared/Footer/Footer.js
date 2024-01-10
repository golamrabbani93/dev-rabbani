import React from 'react';
import './Footer.scss';
import logo from '../../../images/logo.png';
import {Link} from 'react-router-dom';
import {
	FaEnvelope,
	FaFacebook,
	FaGithub,
	FaLink,
	FaLinkedin,
	FaPhoneAlt,
	FaTwitter,
} from 'react-icons/fa';
import {motion} from 'framer-motion';
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__top">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<motion.div
								initial={{x: -200, opacity: 0}}
								whileInView={{x: 0, opacity: 1}}
								transition={{duration: 0.6}}
								className="single-footer"
							>
								<h4>quick links</h4>
								<div className="head-animation">
									<div className="post-heading"></div>
								</div>
								<ul>
									<li>
										<Link to={'/'}>Home</Link>
									</li>
									<li>
										<Link to={'/about'}>About Us</Link>
									</li>

									<li>
										<Link to={'/services'}>Our Services</Link>
									</li>
									<li>
										<Link to={'/portfolio'}>Portfolio</Link>
									</li>
									<li>
										<Link to={'/contact'}>Contact Us</Link>
									</li>
								</ul>
							</motion.div>
						</div>
						<motion.div
							initial={{y: -200, opacity: 0}}
							whileInView={{y: 0, opacity: 1}}
							transition={{duration: 0.6}}
							className="col-lg-4 col-md-6"
						>
							<div className="single-footer contact-us">
								<h4>Contact Us</h4>
								<div className="head-animation">
									<div className="post-heading"></div>
								</div>

								<ul>
									<li>
										<Link>
											<FaPhoneAlt />
											01590090608
										</Link>
									</li>
									<li>
										<Link>
											<FaEnvelope />
											golamrabbani7235@gmail.com
										</Link>
									</li>
									<li>
										<Link>
											<FaLink />
											https://webrabbani.web.app/
										</Link>
									</li>
								</ul>
							</div>
						</motion.div>
						<div className="col-lg-4 col-md-6">
							<motion.div
								initial={{x: 200, opacity: 0}}
								whileInView={{x: 0, opacity: 1}}
								transition={{duration: 0.6}}
								className="single-footer newsletter"
							>
								<h4>newslatter</h4>
								<div className="head-animation">
									<div className="post-heading"></div>
								</div>
								<form className="form">
									<input type="email" className="form-control" placeholder="E-mail" />
									<button type="submit">Subscribe</button>
								</form>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__bottom text-center text-lg-start">
				<div className="container-fluid">
					<motion.div
						initial={{y: -200, opacity: 0}}
						whileInView={{y: 0, opacity: 1}}
						transition={{duration: 0.6}}
						className="row"
					>
						<div className="col-lg-4">
							<div className="footer__bottom--logo">
								<Link to={`/`}>
									<img src={logo} alt="" />
								</Link>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer__bottom--social">
								<ul>
									<li>
										<a href={`https://www.facebook.com/golam.rabbani.72`} target="_blank">
											<FaFacebook />
										</a>
									</li>
									<li>
										<a href={`https://www.linkedin.com/in/g-rabbani/`} target="_blank">
											<FaLinkedin />
										</a>
									</li>
									<li>
										<a href={`https://www.facebook.com/golam.rabbani.72`} target="_blank">
											<FaTwitter />
										</a>
									</li>
									<li>
										<a href={`https://github.com/golamrabbani93`} target="_blank">
											<FaGithub />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer__bottom--copyright">
								&copy;
								{` ${new Date().getFullYear()} `}
								webrabbani. All Rights Reserved.
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
