import React from 'react';
import BreadCumb from '../Shared/BreadCumb/BreadCumb';
import {motion} from 'framer-motion';
import {HiPhoneArrowUpRight} from 'react-icons/hi2';
import {ImLocation2} from 'react-icons/im';
import {AiFillMail} from 'react-icons/ai';
import './contact.scss';
import UseTitle from '../../hooks/UseTitle';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
const Contact = () => {
	UseTitle('Contact || Webrabbani');
	const {register, handleSubmit} = useForm();
	const submitData = (data) => {
		console.log(data);
		try {
			fetch('https://webrabbani-server.vercel.app/addMessage', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((result) => {
					if (result) {
						alert('Your Message Send Successfully');
					}
				});
		} catch (error) {
			alert('Your Message Send Successfully');
		}
	};
	return (
		<div>
			<div>
				<BreadCumb data="Contact"></BreadCumb>
				<div style={{paddingTop: '25rem'}}></div>
			</div>
			<div className="contact" style={{background: '#000000'}}>
				<div className="contact--top">
					<div className="row text-center">
						<motion.div
							initial={{y: -200, opacity: 0}}
							whileInView={{y: 0, opacity: 1}}
							transition={{duration: 0.6}}
							className="services__top text-center"
						>
							<h3 className="services__top--main">Have a Questions</h3>
							<div className="head-animation">
								<div className="post-heading"></div>
							</div>
						</motion.div>
					</div>
				</div>
				<div className="contact--bottom">
					<div className="information">
						<div className="call text-white">
							<div className="icon">
								<HiPhoneArrowUpRight />
							</div>
							<div className="text">
								<p>Call Now</p>
								<p>+8801590090608</p>
							</div>
						</div>
						<div className="call text-white">
							<div className="icon">
								<ImLocation2 />
							</div>
							<div className="text">
								<p>Address</p>
								<p>Rajshahi,Bangladesh</p>
							</div>
						</div>
						<div className="call text-white">
							<div className="icon">
								<AiFillMail />
							</div>
							<div className="text">
								<p>Email </p>
								<p>golamrabbani7235@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<form onSubmit={handleSubmit(submitData)} className="contact--form d-flex gap-5">
					<div className="input-left">
						<input {...register('name')} required={true} type="text" placeholder="Name" />
						<br />
						<input {...register('email')} required={true} type="email" placeholder="Email" />
						<p>All Fields Are Required</p>
					</div>
					<div className="input-right">
						<textarea
							{...register('message')}
							required={true}
							name="message"
							placeholder="Message"
							id=""
							cols="30"
							rows="10"
						></textarea>
						<div className="text-right">
							<button type="submit" className="custom_button m-auto">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
