import React from "react";
import "./Footer.css";
import { Button, ButtonGroup } from "semantic-ui-react";

const Footer = () => {
	return (
		<div className="Footer">
			<h4>msobczyk | Portfolio 2022</h4>
			<ButtonGroup>
				<Button
					circular
					color="github"
					icon="github"
					onClick={() => {
						window.location.href = "https://github.com/msobczyk-x";
					}}
				/>
				<Button
					circular
					color="linkedin"
					icon="linkedin"
					onClick={() => {
						window.location.href = "https://linkedin.com/in/maciej-sobczyk";
					}}
				/>
				<Button
					circular
					color="instagram"
					icon="instagram"
					onClick={() => {
						window.location.href = "https://instagram.com/sobczyk.foto/";
					}}
				/>
			</ButtonGroup>
		</div>
	);
};
export default Footer;
