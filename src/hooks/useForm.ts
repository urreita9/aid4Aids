import { useState } from 'react';

export const useForm = (
	initialState = {},
	onSubmit: (arg: any) => void,
	action: string
) => {
	const [form, setForm] = useState(initialState);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (action === 'login') {
			onSubmit(form);
		} else if (action === 'register') {
			onSubmit(form);
		} else {
			return;
		}
	};

	return { form, handleInputChange, handleSubmit };
};
