import {Button, Col, Divider, Row, Spin} from 'antd';
import DevrabbaniForm from '../../../../components/Form/DevrabbaniForm';
import DevrabbaniInput from '../../../../components/Form/DevrabbaniInput';
import DevrabbaniUpload from '../../../../components/Form/DevrabbaniUpload';
import {useState} from 'react';
import {FormProvider, useFieldArray, useForm} from 'react-hook-form';
import DevrabbaniSelect from '../../../../components/Form/DevrabbaniSelect';
import {IoMdAddCircleOutline} from 'react-icons/io';
import {FaTrash} from 'react-icons/fa';
import {useAddProjectMutation} from '../../../../redux/features/project/project.management';
import {toast} from 'sonner';
import {useGetAllTechnologiesQuery} from '../../../../redux/features/technologies/technologies.management';
const style = {
	padding: '8px 0',
};
const AddProject = () => {
	//get Technologies
	const {data: technologies, isLoading: techLoading} = useGetAllTechnologiesQuery();
	const [addProjectsAddProject, {data, isLoading}] = useAddProjectMutation();

	const [fullPhoto, setFullPhoto] = useState([]);
	const [images, setImages] = useState([]);
	const methods = useForm();

	const {control, handleSubmit, reset} = methods;

	const {fields, append, remove} = useFieldArray({
		control,
		name: 'features',
	});
	const handleFieldAppend = () => {
		append({name: 'feature'});
	};

	const handleSubmitData = async (data) => {
		if (fullPhoto.length <= 0 && images.length <= 0) {
			toast.error('Please Select Project Photo');
		}
		const formData = new FormData();
		const newData = {
			...data,
			features: data.features.map((f) => f.value),
		};

		formData.append('data', JSON.stringify(newData));

		for (let image of images) {
			formData.append('images', image?.originFileObj);
		}
		formData.append('fullPhoto', fullPhoto[0]?.originFileObj);

		const dt = await addProjectsAddProject(formData);
		if (dt?.error) {
			toast.error(dt.error.data.errorSources[0].message);
		} else {
			toast.success('Project Added Successfully');
			setFullPhoto([]);
			setImages([]);
			fields.length = 0;
			reset();
		}
	};

	const projectFilterOptions = [
		{label: 'Dynamic', value: 'dynamic'},
		{label: 'Static', value: 'static'},
		{label: 'Games', value: 'games'},
	];

	const projectTechnologiesOptions = technologies?.data?.map((tech) => {
		return {
			label: tech.name,
			value: tech._id,
		};
	});
	return (
		<>
			<h2 class className="title-header">
				Add Projects
			</h2>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(handleSubmitData)}>
					<Divider orientation="center">Project Details</Divider>
					<div className="row">
						<div className="col-md-3">
							<div style={style}>
								<DevrabbaniInput name="name" label="Project Name" />
							</div>
						</div>

						<div className="col-md-3">
							<div style={style}>
								<DevrabbaniInput name="liveLink" label="Live Link" />
							</div>
						</div>

						<div className="col-md-3">
							<div style={style}>
								<DevrabbaniSelect
									name="filter"
									label="Filter Project"
									options={projectFilterOptions}
								/>
							</div>
						</div>

						<div className="col-md-3">
							<div style={style}>
								<DevrabbaniSelect
									name="technologies"
									label="Add Technologies"
									options={projectTechnologiesOptions}
									mode={'multiple'}
									disabled={techLoading}
								/>
							</div>
						</div>
					</div>

					<Divider orientation="center">Github Details</Divider>
					<Row gutter={16}>
						<Col span={12}>
							<div style={style}>
								<DevrabbaniInput name="githubClientLink" label="Github Client Link" />
							</div>
						</Col>
						<Col span={12}>
							<div style={style}>
								<DevrabbaniInput name="githubServerLink" label="Github Server Link" />
							</div>
						</Col>
					</Row>
					<Divider orientation="center">Project Admin Login Credential</Divider>
					<Row gutter={16}>
						<Col span={12}>
							<div style={style}>
								<DevrabbaniInput name="adminEmail" label="Admin Email" />
							</div>
						</Col>
						<Col span={12}>
							<div style={style}>
								<DevrabbaniInput name="adminPassword" label="Admin Password" />
							</div>
						</Col>
					</Row>
					<Divider orientation="center">Project Image Upload</Divider>
					<Row gutter={16}>
						<Col span={12}>
							<div style={style}>
								<label className="mb-2">Upload Full Project Image for Animation</label>
								<DevrabbaniUpload setFileList={setFullPhoto} fileList={fullPhoto} count={1} />
							</div>
						</Col>
						<Col span={12}>
							<div style={style}>
								<label className="mb-2">Upload Project Images For Details</label>
								<DevrabbaniUpload setFileList={setImages} count={3} fileList={images} />
							</div>
						</Col>
					</Row>
					<Divider orientation="center">Project Features</Divider>
					<Row gutter={16}>
						<Col span={24}>
							<div
								className="d-flex mb-5"
								style={{
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<h1 className="text-xl">Add Project Features</h1>

								<IoMdAddCircleOutline
									onClick={() => handleFieldAppend()}
									className="button-plus "
									style={{width: '100px', height: '50px'}}
								/>
							</div>
						</Col>
						<Col span={24}>
							<div style={style}>
								{fields.map((field, index) => (
									<div key={field.id} className="d-flex gap-2 items-center" style={{}}>
										<DevrabbaniInput label="Feature" name={`features.${index}.value`} />
										<Button
											color="danger"
											isIconOnly
											className="h-16 w-16 "
											onClick={() => remove(index)}
										>
											<FaTrash />
										</Button>
									</div>
								))}
							</div>
						</Col>
					</Row>
					<Button disabled={isLoading} htmlType="submit">
						{isLoading ? <Spin size="small" /> : 'Submit'}
					</Button>
				</form>
			</FormProvider>
		</>
	);
};

export default AddProject;
