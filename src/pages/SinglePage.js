import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'

import {Container} from '../components/styles/Container.styled';


const SinglePage = () => {

	const { id } = useParams();
	console.log(id);

	return (
		<>
			<Container>
				Single Page
			</Container>
		</>
	)
}

export default SinglePage