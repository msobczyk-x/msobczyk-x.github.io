import React from "react";
import "./Contact.scss";
import { Form, Container, Button, ButtonGroup } from "semantic-ui-react";
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	FadeIn,
} from "react-scroll-motion";

const Contact = () => {
	return (
		<div className="Contact">
			<ScrollContainer snap="none">
				<ScrollPage page={3}>
					<Animator animation={batch(FadeIn())}>
						<h1>Contact</h1>
						<Container textAlign="left" className="Form-Container">
							<h3>Have a question or want to work together ?</h3>

							<Form className="Form" size="big">
								<Form.Field>
									<Form.Input placeholder="Name" width={6} />
								</Form.Field>
								<Form.Field>
									<Form.Input placeholder="Enter email" width={6} />
								</Form.Field>
								<Form.Field>
									<Form.TextArea placeholder="Your message" width={6} />
								</Form.Field>
								<Form.Button type="submit">Submit</Form.Button>
							</Form>
						</Container>
					</Animator>
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
				</ScrollPage>
				
			</ScrollContainer>
			
		</div>
	);
};

export default Contact;
