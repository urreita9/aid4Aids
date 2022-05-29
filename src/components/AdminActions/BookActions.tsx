import { useState } from 'react';
import { fetchData, Methods } from '../../helpers/fetchData';
import { Field, Form } from '../Form/Form';
import { Menu } from '../Menu/Menu';

export const BookActions = () => {
	const [formType, setFormType] = useState('add');
	const fieldsArr: Field[] = [
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
	const addBook = (formValues: any) => {
		console.log('salio');
		console.log('form values', formValues);
		fetchData(
			'https://crudcrud.com/api/22923a258ece4eba9cb17a0dd9a9f854/unicorns',
			Methods.POST,
			{ ...formValues }
		);
	};
	const updateBook = () => {
		console.log('Update Book');
	};
	const deleteBook = () => {
		console.log('Delete Book');
	};

	const bookButtons = [
		{ text: 'Add Book', onClick: () => setFormType('add') },
		{ text: 'Update Book', onClick: () => setFormType('update') },
		{ text: 'Delete Book', onClick: () => setFormType('delete') },
	];
	return (
		<>
			<Menu options={bookButtons} />
			{formType === 'add' && (
				<Form
					fieldsArr={fieldsArr}
					formTitle='Add book'
					buttonText='Add'
					action='postBook'
					onSubmit={addBook}
					disabled={false}
				/>
			)}
			{formType === 'update' && (
				<Form
					fieldsArr={fieldsArr}
					formTitle='Update book'
					buttonText='Update'
					action='postBook'
					onSubmit={updateBook}
					disabled={true}
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
					onSubmit={deleteBook}
					disabled={true}
				/>
			)}
		</>
	);
};
