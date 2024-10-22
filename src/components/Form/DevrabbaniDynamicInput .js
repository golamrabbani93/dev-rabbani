import React from 'react';
import {useState} from 'react';
import {Button, Form, Input} from 'antd';
import {Controller, useForm, useFieldArray} from 'react-hook-form';

const DynamicDevrabbaniInput = () => {
	const {control, handleSubmit} = useForm();
	const {fields, append} = useFieldArray({
		control,
		name: 'inputs', // Manages an array of inputs
	});

	const onSubmit = (e) => {
		console.log('🚀🚀: onSubmit -> e', e);
		e.preventDefault();
	};

	return (
		<form onSubmit={(e) => onSubmit(e)} layout="vertical">
			{fields.map((field, index) => (
				<Form.Item label={`Input ${index + 1}`} key={field.id}>
					<Controller
						name={`inputs.${index}.value`}
						control={control}
						defaultValue={field.value || ''}
						render={({field, fieldState: {error}}) => (
							<>
								<Input
									{...field}
									type="text"
									id={`input_${index}`}
									size="large"
									placeholder={`Enter value for input ${index + 1}`}
								/>
								{error && <small className="text-danger">{error.message}</small>}
							</>
						)}
					/>
				</Form.Item>
			))}

			<Button
				type="dashed"
				onClick={() => append({value: ''})} // Adds a new input field dynamically
				block
			>
				Add Input
			</Button>
			<button>sub</button>
		</form>
	);
};

export default DynamicDevrabbaniInput;
