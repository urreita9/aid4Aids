import axios from 'axios';

export enum Methods {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete',
}

export const fetchData = async (
	url: string,
	method: Methods,
	body: any = null
) => {
	const token = localStorage.getItem('token');
	try {
		console.log('en el fetch');
		const { data } = await axios[method](
			url,
			{ ...body }
			// {
			// 	headers: {
			// 		authorization: `Bearer ${token}`,
			// 	},
			// }
		);

		console.log('FETCH DATA', data);
		return { ...data, isbn: +data.isbn, price: +data.price };
	} catch (error) {
		console.log('FETCH ERROR', error);
		return error;
	}
};
