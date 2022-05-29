import { useState } from 'react';

export const useForm = (
	initialState = {},
	onSubmit: (arg: any) => void,
	action: string
) => {
	const [form, setForm] = useState(initialState);
	const [errors, setErrors] = useState(initialState);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		onSubmit(form);
	};

	return { form, handleInputChange, handleSubmit };
};
