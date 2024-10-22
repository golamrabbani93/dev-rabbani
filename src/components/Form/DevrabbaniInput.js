import {Form, Input} from 'antd';
import {Controller} from 'react-hook-form';

const DevrabbaniInput = ({type, name, label, placeholder}) => {
	return (
		<div style={{marginBottom: '20px', width: '100%'}}>
			<Controller
				name={name}
				render={({field, fieldState: {error}}) => (
					<Form.Item label={label}>
						<Input {...field} type={type} id={name} size="large" placeholder={placeholder} />
						{error && <small className="text-[14px] text-danger">{error.message}</small>}
					</Form.Item>
				)}
			/>
		</div>
	);
};

export default DevrabbaniInput;
