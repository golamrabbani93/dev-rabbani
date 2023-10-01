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
					<div className="row text-center">
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
										<Link>Home</Link>
									</li>
									<li>
										<Link>About Us</Link>
									</li>
									<li>
										<Link>Our Services</Link>
									</li>
									<li>
										<Link>Gallery</Link>
									</li>
									<li>
										<Link>Contact Us</Link>
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
											webrabbani.com
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
								<Link>
									<img src={logo} alt="" />
								</Link>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer__bottom--social">
								<ul>
									<li>
										<Link>
											<FaFacebook />
										</Link>
									</li>
									<li>
										<Link>
											<FaLinkedin />
										</Link>
									</li>
									<li>
										<Link>
											<FaTwitter />
										</Link>
									</li>
									<li>
										<Link>
											<FaGithub />
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer__bottom--copyright">
								&copy;
								<script>document.write(new Date().getFullYear());</script>
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
