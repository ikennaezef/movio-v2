import styled from 'styled-components';

export const CarouselContainer = styled.div`
	width: 32rem;
	margin-bottom: 1rem;

	& > p {
		margin: 0.5rem 0;
	}

	@media (max-width: 769px) {
		width: 24rem;
	}

	@media (max-width: 376px) {
		width: 18rem;
	}
`;

export const CarouselItem = styled.div`
	border-radius: 0.4rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	object-fit: contain;
	height: 100%;
	width: 5rem;

	padding: 0.2rem;
	margin-right: 1rem;
`;

export const CarouselImage = styled.img`
	box-shadow: ${({theme}) => theme.shadow};	
	border-radius: 0.4rem;
	width: 4.5rem;
	object-fit: cover;
	margin-bottom: 0.5rem;
`;

export const Name = styled.p`
	font-size: 0.9rem;
`;