import {useState, useRef} from 'react';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DevrabbaniForm from '../../../../components/Form/DevrabbaniForm';
import DevrabbaniInput from '../../../../components/Form/DevrabbaniInput';
import DevrabbaniUpload from '../../../../components/Form/DevrabbaniUpload';
import {Button, Spin} from 'antd';
import {toast} from 'sonner';
import {useAddBlogMutation} from '../../../../redux/features/blog/blog.management';

const AddBlog = () => {
	const [addBlog, {isLoading}] = useAddBlogMutation();
	const [value, setValue] = useState('');
	const [files, setFiles] = useState([]);
	const quillRef = useRef(null);
	const handleSubmitData = async (data) => {
		if (data.title === undefined) {
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
			content: value,
		};
		const formData = new FormData();
		formData.append('data', JSON.stringify(newData));
		formData.append('images', files[0]?.originFileObj);

		const dt = await addBlog(formData);
		if (dt?.error) {
			toast.error(dt.error.data.errorSources[0].message);
		} else {
			toast.success('Blog Added Successfully');
			setFiles([]);
			quillRef.current.editor.setText('');
		}
	};
	return (
		<>
			<h2 class className="title-header">
				Add Projects
			</h2>
			<div
				style={{
					width: '50%',
					margin: '0 auto',
				}}
			>
				<DevrabbaniForm onSubmit={handleSubmitData}>
					<DevrabbaniInput name="title" label="Enter Blog Title" />
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

export default AddBlog;
