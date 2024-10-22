import {Form, Select} from 'antd';
import {Controller} from 'react-hook-form';

const DevrabbaniSelect = ({label, name, options, disabled, mode}) => {
	return (
		<Controller
			name={name}
			render={({field, fieldState: {error}}) => (
				<Form.Item label={label}>
					<Select
						mode={mode}
						style={{width: '250px'}}
						{...field}
						options={options}
						size="large"
						disabled={disabled}
					/>
					{error && <small style={{color: 'red'}}>{error.message}</small>}
				</Form.Item>
			)}
		/>
	);
};

export default DevrabbaniSelect;
