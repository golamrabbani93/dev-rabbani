import {Link, useParams} from 'react-router-dom';
import {useGetSingleBlogQuery} from '../../redux/features/blog/blog.management';
import BreadCumb from '../Shared/BreadCumb/BreadCumb';
import Loader from '../Shared/Loader/Loader';
import {Button} from 'antd';
import {useEffect} from 'react';

const SingleBlog = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const params = useParams();
	const blogId = params.id;
	const {data, isLoading} = useGetSingleBlogQuery(blogId);
	console.log('🚀🚀: SingleBlog -> data', data);
	const blog = data?.data || {};
	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<BreadCumb data={blog.title}> </BreadCumb>
			<div
				className="bg-black text-white"
				style={{
					padding: '30rem 0 10rem 0',
				}}
			>
				<div className="container mt-5">
					{/* Back to Blogs Button */}
					<div className="mb-4">
						<Link href="/blogs">
							<Button size="sm" danger type="primary">
								Back to Blogs
							</Button>
						</Link>
					</div>

					{/* Blog Title */}
					<h1 className="mb-4 text-center">{blog.title}</h1>

					{/* Blog Image */}
					<div className="text-center mb-5">
						<img src={blog.images[0]} alt="Blog Cover" className="img-fluid rounded w-50" />
					</div>

					{/* Blog Content */}
					<div className="blog-content mt-5">
						<div
							dangerouslySetInnerHTML={{
								__html: blog?.content,
							}}
							style={{fontSize: '20px'}}
						/>
					</div>

					{/* Back to Blogs Button at the bottom */}
					<div className="mt-4 text-center">
						<Link href="/blogs">
							<Button size="sm" danger type="primary">
								Back to Blogs
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;
