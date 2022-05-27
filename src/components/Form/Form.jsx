import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import {
	FormContainer,
	FormControl,
	FormInput,
	FormLabel,
	FormSeparator,
	FormTitle,
	SubmitButton,
} from './Styled';

export const Form = ({ fieldsArr, formTitle, buttonText }) => {
	const { form, handleInputChange, handleSubmit } = useForm({
		// name: '',
		// email: '',
		// password: '',
	});

	return (
		<FormContainer>
			<FormSeparator>
				<FormTitle>{formTitle}</FormTitle>

				{fieldsArr.map((field, i) => (
					<FormControl key={i}>
						<FormLabel>{field.label}</FormLabel>
						<FormInput
							name={field.name}
							type={field.type}
							value={form[field.name]}
							onChange={handleInputChange}
						/>
					</FormControl>
				))}
			</FormSeparator>
			<FormSeparator>
				<SubmitButton onClick={handleSubmit}>{buttonText}</SubmitButton>
			</FormSeparator>
		</FormContainer>
	);
};
