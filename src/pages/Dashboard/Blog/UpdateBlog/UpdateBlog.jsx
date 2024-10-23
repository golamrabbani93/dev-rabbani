import {useState, useRef, useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DevrabbaniForm from '../../../../components/Form/DevrabbaniForm';
import DevrabbaniUpload from '../../../../components/Form/DevrabbaniUpload';
import {Button, Form, Input, Spin} from 'antd';
import {toast} from 'sonner';
import {
	useGetSingleBlogQuery,
	useUpdateBlogMutation,
} from '../../../../redux/features/blog/blog.management';
import {useParams} from 'react-router-dom';

const UpdateBlog = () => {
	const [updateBlog, {isLoading}] = useUpdateBlogMutation();
	const params = useParams();
	const blogId = params.id;
	const {data: blogData, isLoading: blogLoading} = useGetSingleBlogQuery(blogId);
	const blog = blogData?.data;
	const [value, setValue] = useState('');
	const [files, setFiles] = useState([]);
	const [title, setTitle] = useState('');

	useEffect(() => {
		if (blog) {
			setValue(blog.content);
			setFiles([{thumbUrl: blog.images[0]}]);
			setTitle(blog.title);
		}
	}, [blog]);

	const quillRef = useRef(null);

	const handleSubmitData = async (data) => {
		if (!title) {
			toast.error('Please Enter Blog Title');
			return; // Stops further execution
		}
		if (files.length <= 0) {
			toast.error('Please Select Blog Cover Photo');
			return; // Stops further execution
		}
		if (value === '') {
			toast.error('Please Enter Blog Content');
			return; // Stops further execution
		}
		const newData = {
			...data,
			title,
			content: value,
		};
		const formData = new FormData();
		formData.append('data', JSON.stringify(newData));
		formData.append('images', files[0]?.originFileObj);

		const updateData = {
			id: blogId,
			data: formData,
		};

		const dt = await updateBlog(updateData);
		if (dt?.error) {
			toast.error(dt.error.data.errorSources[0].message);
		} else {
			toast.success('Blog Update Successfully');
			setFiles([]);
			quillRef.current.editor.setText('');
		}
	};

	if (blogLoading) {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Spin />
			</div>
		);
	}

	return (
		<>
			<h2 className="title-header">Update Blog</h2>
			<div
				style={{
					width: '50%',
					margin: '0 auto',
				}}
			>
				<DevrabbaniForm onSubmit={handleSubmitData}>
					<Form.Item label="Enter Blog Title">
						<Input
							name="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="mb-5"
						/>
					</Form.Item>
					<label className="mb-1">Upload Blog Cover Photo</label>
					<DevrabbaniUpload name="image" setFileList={setFiles} fileList={files} count={1} />
					<label className="mb-1">Blog Content</label>
					<ReactQuill
						style={{
							height: '130px',
							marginBottom: '20px',
						}}
						ref={quillRef}
						theme="snow"
						value={value}
						onChange={setValue}
						modules={{
							toolbar: [
								[{header: [1, 2, false]}],
								['bold', 'italic', 'underline'],
								['image', 'code-block'],
								[{list: 'ordered'}, {list: 'bullet'}],
							],
						}}
					/>
					<Button htmlType="submit" className="mt-5">
						{isLoading ? <Spin size="small" /> : 'Submit'}
					</Button>
				</DevrabbaniForm>
			</div>
		</>
	);
};

export default UpdateBlog;
