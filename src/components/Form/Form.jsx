import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
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
	link,
}) => {
	const initialForm = useMemo(() => prepareForm(fieldsArr), [fieldsArr]);

	const [linkText, setLinkText] = useState('');
	const { form, handleInputChange, handleSubmit } = useForm(
		{
			...initialForm,
		},
		onSubmit,
		action
	);

	useEffect(() => {
		if (link === 'login') {
			setLinkText('Already have an Account?');
		} else if (link === 'register') {
			setLinkText("Don't have an Account?");
		}
	}, [link]);

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
				<br />

				{link?.length && <Link to={`/${link}`}>{linkText}</Link>}
			</FormSeparator>
		</FormContainer>
	);
};
