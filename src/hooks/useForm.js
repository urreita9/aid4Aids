import { useState } from 'react';

export const useForm = (initialState = {}, onSubmit) => {
	const [form, setForm] = useState(initialState);

	const handleInputChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return { form, handleInputChange, handleSubmit };
};
