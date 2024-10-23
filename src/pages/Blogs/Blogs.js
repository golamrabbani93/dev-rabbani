import {useEffect} from 'react';
import UseTitle from '../../hooks/UseTitle';
import BreadCumb from '../Shared/BreadCumb/BreadCumb';
import {Link} from 'react-router-dom';
import {useGetAllBlogQuery} from '../../redux/features/blog/blog.management';
import Loader from '../Shared/Loader/Loader';

const Blogs = () => {
	UseTitle('Blogs || Webrabbani');
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const {data, isLoading} = useGetAllBlogQuery('');

	const blogData = data?.data ? [...data.data].reverse() : [];
	if (isLoading) {
		return <Loader />;
	}
	return (
		<div>
			<BreadCumb data={'All Blogs'}> </BreadCumb>

			<div
				className="bg-black text-white"
				style={{
					padding: '30rem 0 10rem 0',
				}}
			>
				{blogData.map((blog) => (
					<div key={blog._id} className="container mt-5 border  w-md-75 ">
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
								<h5 className="mb-0 text-white" style={{fontSize: '20px'}}>
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
			</div>
		</div>
	);
};

export default Blogs;
