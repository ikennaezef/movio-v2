import styled from "styled-components";

export const StyledError = styled.div`
	margin-top: 5rem;

	& > p {
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	& > button {
		display: flex;
		align-items: center;
		svg {
			font-size: 1.5rem;
		}
	}
`;
