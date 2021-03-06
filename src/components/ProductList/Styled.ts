import styled from 'styled-components';

export const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1600px;
	margin: 0 auto;
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 200px;
		grid-column-gap: 10px;
		grid-row-gap: 10px;
	}
`;
