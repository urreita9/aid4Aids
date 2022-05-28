import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { FormTitle } from './Styled';
import {
	FormContainer,
	FormControl,
	FormInput,
	FormLabel,
	FormSeparator,
	SubmitButton,
} from './Styled';

const linkStyle = {
	textDecoration: 'none',
	color: '#86B2FA',
	hover: {
		textDecoration: 'underline',
	},
};
export interface Field {
	label: string;
	name: string;
	type: string;
}
interface Props {
	fieldsArr: Field[];
	formTitle: string;
	buttonText: string;
	action: string;
	onSubmit: () => void;
	link?: string;
}

const prepareForm = (formArr: Field[]) => {
	return formArr.reduce((r, v) => ({ ...r, [v.name]: '' }), {});
};

export const Form = ({
	fieldsArr,
	formTitle,
	buttonText,
	action,
	onSubmit,
	link,
}: Props) => {
	const initialForm = useMemo(() => prepareForm(fieldsArr), [fieldsArr]);

	const [linkText, setLinkText] = useState('');
	const { form, handleInputChange, handleSubmit }: any = useForm(
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
		<FormContainer autoComplete='off'>
			<FormSeparator>
				<FormTitle>{formTitle}</FormTitle>

				{fieldsArr.map((field, i) => (
					<FormControl key={i}>
						<FormLabel htmlFor={field.name}>{field.label}</FormLabel>
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

				{link?.length && (
					<Link to={`/${link}`} style={linkStyle}>
						{linkText}
					</Link>
				)}
			</FormSeparator>
		</FormContainer>
	);
};