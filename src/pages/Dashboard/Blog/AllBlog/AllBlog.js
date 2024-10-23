import {Button, Modal, Spin, Table, Tag} from 'antd';
import {
	useDeleteBlogMutation,
	useGetAllBlogQuery,
} from '../../../../redux/features/blog/blog.management';
import {Link} from 'react-router-dom';
import {color} from 'framer-motion';
import {useState} from 'react';
import {toast} from 'sonner';

const AllBlog = () => {
	const {data: blogs, isLoading, isError} = useGetAllBlogQuery('');
	const blogData = blogs?.data;

	const newDataSource = blogData?.map((item) => {
		return {
			key: item._id,
			title: item.title,
			images: item.images,
			status: item.status,
		};
	});
	const columns = [
		{
			title: 'Cover Photo',
			dataIndex: 'images',
			key: 'images',
			render: (text, record) => (
				<img src={text[0]} alt="project" style={{width: '50px', height: '50px'}} />
			),
		},
		{
			title: 'Blog Title',
			dataIndex: 'title',
			key: 'title',
		},

		{
			title: 'Blog Status',
			dataIndex: 'status',
			key: 'status',
			render: (text, record) => (
				<Tag
					color="success"
					style={{
						textTransform: 'uppercase',
					}}
				>
					{text ? 'Active' : 'Inactive'}
				</Tag>
			),
		},
		{
			title: 'Blog Action',
			dataIndex: 'action',
			key: '  action',
			render: (text, record) => (
				<div className="d-flex">
					<Link className="me-3" to={`/dashboard/update-blog/${record.key}`}>
						<Button>Update Blog</Button>
					</Link>
					<DeleteBlog blogData={record} />
				</div>
			),
		},
	];
	return (
		<>
			<h2 class className="title-header">
				All Projects
			</h2>
			<Table loading={isLoading} dataSource={newDataSource} columns={columns} />
		</>
	);
};
const DeleteBlog = ({blogData}) => {
	const [open, setOpen] = useState(false);
	const [deleteBlog, {isLoading}] = useDeleteBlogMutation();
	const showModal = () => {
		setOpen(true);
	};

	const handleOk = async () => {
		const toastId = toast.loading('Blog Deleting...');
		const res = await deleteBlog(blogData.key);
		if (res.error) {
			toast.error(res?.error?.data?.message, {id: toastId, duration: 2000});
		} else {
			toast.success('Blog Deleted Successful', {id: toastId, duration: 2000});
			setOpen(false);
		}
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={showModal} className="ml-2" danger>
				Delete Blog
			</Button>
			<Modal
				open={open}
				// title={`Delete ${bikeData?.name}`}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key={'1'} onClick={handleCancel}>
						No
					</Button>,

					<Button key={'2'} onClick={handleOk} className="ml-2" danger>
						{isLoading ? <Spin /> : 'Delete'}
					</Button>,
				]}
			>
				<h2 className="text-3xl font-semibold mb-2 text-red-600">{`Delete ${blogData?.title}`}</h2>
				<p className="text-xl mt-2">Are You Sure To delete This Bike</p>
			</Modal>
		</div>
	);
};
export default AllBlog;
