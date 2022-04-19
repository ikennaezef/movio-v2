import styled from 'styled-components';

const LoaderContainer = styled.div`
	background: ${({theme}) => theme.background};
	height: 60vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: block;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		border: 2px solid transparent;
		border-top-color: ${({theme}) => theme.accent};
		animation: spin 1.1s ease-out infinite;
	}

	@keyframes spin {
		to {
			transform: rotateZ(360deg);
		}
	}

`;


const Loader = () => {
	return (
		<LoaderContainer>
			<span></span>
		</LoaderContainer>
	)
}

export default Loader