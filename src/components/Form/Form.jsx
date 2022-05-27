import React from 'react';
import {
	FormContainer,
	FormControl,
	FormInput,
	FormLabel,
	FormTitle,
	SubmitButton,
} from './Styled';

export const Form = ({ fieldsArr }) => {
	return (
		<FormContainer>
			<FormTitle>Register</FormTitle>

			{fieldsArr.map((field) => (
				<FormControl key={field}>
					<FormLabel>{field.label}</FormLabel>
					<FormInput name={field.name} type={field.type} />
				</FormControl>
			))}

			<SubmitButton>Register</SubmitButton>
		</FormContainer>
	);
};
