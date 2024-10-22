import {Table, Tag} from 'antd';
import {useGetAllProjectQuery} from '../../../../redux/features/project/project.management';

const AllProjects = () => {
	const {data: AllProjects, isLoading, isError} = useGetAllProjectQuery();
	const projectData = AllProjects?.data;

	const newDataSource = projectData?.map((item) => {
		return {
			key: item._id,
			name: item.name,
			photo: item.fullPhoto,
			liveLink: item.liveLink,
			status: item.status,
		};
	});

	console.log('🚀🚀: AllProjects -> newDataSource', newDataSource);
	// const dataSource = [
	// 	{
	// 		key: '1',
	// 		name: 'Mike',
	// 		age: 32,
	// 		address: '10 Downing Street',
	// 	},
	// 	{
	// 		key: '1',
	// 		name: 'Mike',
	// 		age: 32,
	// 		address: '10 Downing Street',
	// 	},
	// 	{
	// 		key: '2',
	// 		name: 'John',
	// 		age: 42,
	// 		address: '10 Downing Street',
	// 	},
	// ];

	const columns = [
		{
			title: 'Photo',
			dataIndex: 'photo',
			key: 'photo',
			render: (text, record) => (
				<img src={record.photo} alt="project" style={{width: '50px', height: '50px'}} />
			),
		},
		{
			title: 'Project Name',
			dataIndex: 'name',
			key: 'name',
		},

		{
			title: 'Live Link',
			dataIndex: 'liveLink',
			key: '  liveLink',
			render: (text, record) => (
				<a href={record.liveLink} target="_blank" rel="noreferrer">
					Live Link
				</a>
			),
		},
		{
			title: 'Project Status',
			dataIndex: 'status',
			key: 'status',
			render: (text, record) => (
				<Tag
					color="success"
					style={{
						textTransform: 'uppercase',
					}}
				>
					{text}
				</Tag>
			),
		},
	];

	return <Table loading={isLoading} dataSource={newDataSource} columns={columns} />;
};

export default AllProjects;
