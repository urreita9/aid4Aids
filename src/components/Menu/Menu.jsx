import React from 'react';
import { MenuButton, MenuContainer } from './Styled';

export const Menu = ({ options }) => {
	return (
		<MenuContainer>
			{options.map((option, i) => (
				<MenuButton key={i} onClick={option.onClick}>
					{option.text}
				</MenuButton>
			))}
		</MenuContainer>
	);
};
