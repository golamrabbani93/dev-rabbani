import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import './Contact.scss';
const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_xzmbkme', 'template_zj99x7k', form.current, 'GVmCzyM6KoMMFeQj2').then(
			(result) => {
				toast.success('Message Sent');
				e.target.reset();
			},
			(error) => {
				// console.log(error.text);
				e.target.reset();
			},
		);
	};
	return (
		<section className="portfolio">
			<div className="container">
				<div className="row">
					<div className="portfolio__text text-center">
						<p className="services__top--sub">Contact Me</p>
						<h3 className="services__top--main">If Anything you want</h3>
						<div className="head-animation">
							<div className="post-heading"></div>
						</div>
					</div>
				</div>
				<div className="row contact text-center my-5 ">
					<form ref={form} onSubmit={sendEmail} className="d-block">
						<div>
							<label>Name</label>
							<br />
							<input type="text" name="user_name" required />
						</div>
						<div className="div">
							<label>Email</label>
							<br />
							<input type="email" name="user_email" required />
						</div>
						<div>
							<label>Message</label>
							<br />
							<textarea name="message" required />
						</div>

						<button type="submit" className="button_C m-auto d-block mt-5">
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
