import React from 'react';
import {
	ProductAuthor,
	ProductColumn,
	ProductContainer,
	ProductEditorial,
	ProductImage,
	ProductISBN,
	ProductPrice,
	ProductTitle,
} from './Styled';

export const Product = () => {
	return (
		<ProductContainer>
			<ProductColumn>
				<ProductImage />
			</ProductColumn>
			<ProductColumn>
				<ProductISBN>781492032793</ProductISBN>
				<ProductTitle>Learning Apache Drill</ProductTitle>
				<ProductPrice>$42.26</ProductPrice>
				<ProductAuthor>Tony Tony</ProductAuthor>
				<ProductEditorial>Capaldo</ProductEditorial>
			</ProductColumn>
		</ProductContainer>
	);
};
