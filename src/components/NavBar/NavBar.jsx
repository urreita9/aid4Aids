import React from 'react';
import { Logo, NavBarContainer } from './Styled';
import { RiShoppingCartLine } from 'react-icons/ri';

export const NavBar = () => {
	return (
		<NavBarContainer>
			<Logo />
			<RiShoppingCartLine size={30} style={{ marginRight: '20px' }} />
		</NavBarContainer>
	);
};
