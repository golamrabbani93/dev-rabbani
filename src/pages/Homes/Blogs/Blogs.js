import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {useGetAllBlogQuery} from '../../../redux/features/blog/blog.management';
const Blogs = ({btn}) => {
	const {data} = useGetAllBlogQuery('');

	const blogData = data?.data ? [...data.data].reverse() : [];
	return (
		<section className="portfolio">
			<div className="container">
				<div className="row">
					<motion.div
						initial={{y: 200, opacity: 0}}
						whileInView={{y: 0, opacity: 1}}
						transition={{duration: 0.6}}
						className="portfolio__text text-center"
					>
						<p className="services__top--sub">Blogs</p>
						<h3 className="services__top--main">My Recent Blogs</h3>
						<div className="head-animation">
							<div className="post-heading"></div>
						</div>
					</motion.div>
				</div>
				{blogData.slice(0, 2).map((blog) => (
					<div key={blog._id} className="container mt-5 border  w-md-75">
						<div className="card d-flex flex-column flex-md-row align-items-center p-3 shadow bg-transparent ">
							{/* Left Side Image */}
							<div className="col-12 col-md-3 mb-3 mb-md-0">
								<img
									src={blog.images[0]}
									className="img-fluid rounded d-block m-auto"
									alt="Blog Image"
								/>
							</div>

							{/* Middle Title */}
							<div className="col-12 col-md-6 text-center mb-3 mb-md-0">
								<h5 className="mb-0" style={{fontSize: '20px'}}>
									{blog.title}
								</h5>
							</div>

							<div className="col-12 col-md-3 text-center text-md-end">
								{/* <Link to="/blog"> */}
								<Link to={`/blogs/${blog._id}`} className="custom_button">
									Read More
								</Link>
							</div>
						</div>
					</div>
				))}

				<motion.div
					initial={{x: -200, opacity: 0}}
					whileInView={{x: 0, opacity: 1}}
					transition={{duration: 0.6}}
					className={`button text-center pt-5 ${btn === 'none' ? 'd-none' : ''}`}
				>
					<Link to={`/blogs`} className="custom_button m-auto">
						View All Blogs
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default Blogs;
