import React from 'react';
import { Button } from '../Button/Button';
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
				<Button key={i} onClick={option.onClick} text={option.text} />
			))}
		</MenuContainer>
	);
};
