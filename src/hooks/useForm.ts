import { useEffect, useState } from 'react';

export type Form = Record<string, string | number>;
export type Errors = Record<string, string>;

interface Props {
	form: Form;
	errors: Errors;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const useForm = (
	initialState: Form,
	onSubmit: (arg: Form) => void,
	validate: (arg: Form) => Errors
): Props => {
	const [form, setForm] = useState(initialState);
	const [errors, setErrors] = useState<Errors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		console.log(errors);
		if (Object.keys(errors).length === 0 && isSubmitting) {
			onSubmit(form);
			setIsSubmitting(false);
		}
	}, [errors]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });

		const { [e.target.name]: _, ...rest } = errors;

		setErrors(rest);
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setErrors(validate(form));
		setIsSubmitting(true);
	};

	return { form, errors, handleInputChange, handleSubmit };
};
