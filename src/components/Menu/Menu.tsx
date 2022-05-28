import React from 'react';
import { MenuButton, MenuContainer } from './Styled';

interface Option {
	text: string;
	onClick: () => void;
}
interface Props {
	options: Option[];
}

export const Menu = ({ options }: Props) => {
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
