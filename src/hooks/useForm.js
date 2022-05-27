import { useState } from 'react';

export const useForm = (initialState = {}, onSubmit, action) => {
	const [form, setForm] = useState(initialState);

	const handleInputChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
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
