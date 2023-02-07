import React from 'react';
import Slider from 'react-slick';
import './Testimonial.scss';
import Qoute from '../../../images/testimonial/qoute.png';

const Testimonial = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 3000,
	};
	const Bg = 'https://i.ibb.co/3cxtKFR/bg.jpg';
	const testimonialBg = {
		backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Bg})`,
	};
	return (
		<section className="testimonial" style={testimonialBg}>
			<div className="container">
				<div className="row">
					{/* <div className="testimonial__slider">
                    <div className="testimonial__item text-center text-white">
                        <img src="images/testimonial/qoute.png" className="testimonial__item--image" alt="" />
                        <p className="testimonial__item--content">
                            These guys are awesome! Each time I needed their help, their response was quick and
                            very helpful. Also, the theme is very flexible. Five stars from me for everything! I
                            truly recommend this theme!!!
                        </p>
                        <div className="testimonial__item--data d-flex flex-wrap">
                            <img src="images/testimonial/1.png" alt="" />
                            <div className="data-content">
                                <h4 className="name">Jonis Kobra</h4>
                                <p className="desinagtion">Evanto user</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__item text-center text-white">
                        <img src="images/testimonial/qoute.png" className="testimonial__item--image" alt="" />
                        <p className="testimonial__item--content">
                            These guys are awesome! Each time I needed their help, their response was quick and
                            very helpful. Also, the theme is very flexible. Five stars from me for everything! I
                            truly recommend this theme!!!
                        </p>
                        <div className="testimonial__item--data d-flex flex-wrap">
                            <img src="images/testimonial/1.png" alt="" />
                            <div className="data-content">
                                <h4 className="name">Jonis Kobra</h4>
                                <p className="desinagtion">Evanto user</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__item text-center text-white">
                        <img src="images/testimonial/qoute.png" className="testimonial__item--image" alt="" />
                        <p className="testimonial__item--content">
                            These guys are awesome! Each time I needed their help, their response was quick and
                            very helpful. Also, the theme is very flexible. Five stars from me for everything! I
                            truly recommend this theme!!!
                        </p>
                        <div className="testimonial__item--data d-flex flex-wrap">
                            <img src="images/testimonial/1.png" alt="" />
                            <div className="data-content">
                                <h4 className="name">Jonis Kobra</h4>
                                <p className="desinagtion">Evanto user</p>
                            </div>
                        </div>
                    </div>
                </div> */}
					<Slider {...settings} className="">
						<div className="testimonial__item text-center text-white">
							<img src={Qoute} className="testimonial__item--image" alt="" />
							<p className="testimonial__item--content">
								These guys are awesome! Each time I needed their help, their response was quick and
								very helpful. Also, the theme is very flexible. Five stars from me for everything! I
								truly recommend this theme!!!
							</p>
							<div className="testimonial__item--data d-flex flex-wrap">
								<img src="images/testimonial/1.png" alt="" />
								<div className="data-content">
									<h4 className="name">Jonis Kobra</h4>
									<p className="desinagtion">Evanto user</p>
								</div>
							</div>
						</div>
						<div className="testimonial__item text-center text-white">
							<img src="images/testimonial/qoute.png" className="testimonial__item--image" alt="" />
							<p className="testimonial__item--content">
								These guys are awesome! Each time I needed their help, their response was quick and
								very helpful. Also, the theme is very flexible. Five stars from me for everything! I
								truly recommend this theme!!!
							</p>
							<div className="testimonial__item--data d-flex flex-wrap">
								<img src="images/testimonial/1.png" alt="" />
								<div className="data-content">
									<h4 className="name">Jonis Kobra</h4>
									<p className="desinagtion">Evanto user</p>
								</div>
							</div>
						</div>
						<div className="testimonial__item text-center text-white">
							<img src="images/testimonial/qoute.png" className="testimonial__item--image" alt="" />
							<p className="testimonial__item--content">
								These guys are awesome! Each time I needed their help, their response was quick and
								very helpful. Also, the theme is very flexible. Five stars from me for everything! I
								truly recommend this theme!!!
							</p>
							<div className="testimonial__item--data d-flex flex-wrap">
								<img src="images/testimonial/1.png" alt="" />
								<div className="data-content">
									<h4 className="name">Jonis Kobra</h4>
									<p className="desinagtion">Evanto user</p>
								</div>
							</div>
						</div>
						<div className="testimonial__item text-center text-white">
							<img src="images/testimonial/qoute.png" className="testimonial__item--image" alt="" />
							<p className="testimonial__item--content">
								These guys are awesome! Each time I needed their help, their response was quick and
								very helpful. Also, the theme is very flexible. Five stars from me for everything! I
								truly recommend this theme!!!
							</p>
							<div className="testimonial__item--data d-flex flex-wrap">
								<img src="images/testimonial/1.png" alt="" />
								<div className="data-content">
									<h4 className="name">Jonis Kobra</h4>
									<p className="desinagtion">Evanto user</p>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
