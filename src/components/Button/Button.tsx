import { ButtonWidget } from './Styled';

interface Props {
	text: string;
	onClick: () => void;
}
export const Button = ({ text, onClick }: Props) => {
	return <ButtonWidget onClick={onClick}>{text}</ButtonWidget>;
};
