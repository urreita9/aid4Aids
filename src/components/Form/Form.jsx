import React, { useMemo } from 'react';
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

const prepareForm = (formArr) => {
	return formArr.reduce((r, v) => ({ ...r, [v.name]: '' }), {});
};

export const Form = ({
	fieldsArr,
	formTitle,
	buttonText,
	action,
	onSubmit,
}) => {
	const initialForm = useMemo(() => prepareForm(fieldsArr), [fieldsArr]);

	const { form, handleInputChange, handleSubmit } = useForm(
		{
			...initialForm,
		},
		onSubmit,
		action
	);

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
