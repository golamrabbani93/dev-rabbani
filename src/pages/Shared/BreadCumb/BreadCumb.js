import React from 'react';
import {Link} from 'react-router-dom';
import BreadBG from '../../../images/breadcumb.png';
import './BreadCumb.scss';
const BreadCumb = () => {
	const Bg = {
		backgroundImage: ` url(${BreadBG})`,
	};
	return (
		<section class="breadcumb" style={Bg}>
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="breadcumb__text">
							<h4>About Me</h4>
							<ul>
								<li>
									<Link to={'/'}>Home</Link>
								</li>
								/<li>About Me</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BreadCumb;
