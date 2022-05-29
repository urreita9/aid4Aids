import styled from 'styled-components';

// interface Props {
// 	imgURL?: string;
// }

export const ProductContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	width: 90%;
	@media (min-width: 768px) {
		margin-top: 0;
	}
`;
export const ProductColumn = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const ProductRow = styled.div``;

export const ProductImage = styled.div<{ imgURL: string }>`
	background-image: ${({ imgURL }) => imgURL};
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
export const ProductISBN = styled.p`
	margin: 0;
`;
export const ProductTitle = styled.p`
	margin: 0;
`;
export const ProductPrice = styled.p`
	margin: 0;
`;
export const ProductAuthor = styled.p`
	margin: 0;
`;
export const ProductEditorial = styled.p`
	margin: 0;
`;
