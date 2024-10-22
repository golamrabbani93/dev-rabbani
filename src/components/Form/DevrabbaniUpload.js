import {useState} from 'react';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {Form, message, Upload} from 'antd';

const beforeUpload = (file) => {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}
	return isJpgOrPng && isLt2M;
};

const DevrabbaniUpload = ({fileList: list, setFileList, count}) => {
	const handleChange = (info) => {
		setFileList(info?.fileList);
	};

	const uploadButton = (
		<button
			style={{
				border: 0,
				background: 'none',
				color: '#fff',
			}}
			type="button"
		>
			{<PlusOutlined />}
			<div style={{marginTop: 8}}>Upload</div>
		</button>
	);

	return (
		<div style={{marginBottom: '20px'}}>
			<Upload
				name="avatar"
				listType="picture-card"
				className="avatar-uploader"
				beforeUpload={beforeUpload}
				onChange={handleChange}
				fileList={list}
				maxCount={count | 1}
			>
				{list.length >= count ? null : uploadButton}
			</Upload>
		</div>
	);
};

export default DevrabbaniUpload;
