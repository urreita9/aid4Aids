import React, { useState } from 'react';
import { Form } from '../../components/Form/Form';
import { Menu } from '../../components/Menu/Menu';
import { AdminContainer, AdminTitle } from './Styled';

export const Admin = () => {
	const [formType, setFormType] = useState('add');
	const fieldsArr = [
		{
			label: 'ISBN',
			name: 'isbn',
			type: 'number',
		},
		{
			label: 'imageURL',
			name: 'imageURL',
			type: 'text',
		},
		{
			label: 'Title',
			name: 'title',
			type: 'text',
		},
		{
			label: 'Price',
			name: 'price',
			type: 'number',
		},
		{
			label: 'Author',
			name: 'author',
			type: 'text',
		},
		{
			label: 'Publisher',
			name: 'publisher',
			type: 'text',
		},
	];
	const onSubmit = () => {
		console.log('Add Book');
	};

	const buttons = [
		{ text: 'Add Book', onClick: () => setFormType('add') },
		{ text: 'Update Book', onClick: () => setFormType('update') },
		{ text: 'Delete Book', onClick: () => setFormType('delete') },
	];

	return (
		<AdminContainer>
			<AdminTitle>Admin</AdminTitle>

			<Menu options={buttons} />
			{formType === 'add' && (
				<Form
					fieldsArr={fieldsArr}
					formTitle='Add book'
					buttonText='Add'
					action='postBook'
					onSubmit={onSubmit}
				/>
			)}
			{formType === 'update' && (
				<Form
					fieldsArr={fieldsArr}
					formTitle='Update book'
					buttonText='Update'
					action='postBook'
					onSubmit={onSubmit}
				/>
			)}
			{formType === 'delete' && (
				<Form
					fieldsArr={[
						{
							label: 'ISBN',
							name: 'isbn',
							type: 'number',
						},
					]}
					formTitle='Delete book'
					buttonText='Delete'
					action='postBook'
					onSubmit={onSubmit}
				/>
			)}
		</AdminContainer>
	);
};
