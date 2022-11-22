import React from "react";
import { StyledError } from "./styles/Error.styled";
import { MdOutlineRefresh } from "react-icons/md";
import { Button } from "./styles/SinglePage.styled";

const Error = ({ message }) => {
	return (
		<StyledError>
			<p>{message}</p>
			<Button onClick={() => window.location.reload()}>
				<MdOutlineRefresh />
				REFRESH
			</Button>
		</StyledError>
	);
};

export default Error;
