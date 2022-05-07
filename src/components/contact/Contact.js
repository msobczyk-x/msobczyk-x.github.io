import React from "react";
import "./Contact.css";
import { Form, Container } from "semantic-ui-react";
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	FadeIn,
} from "react-scroll-motion";
import Footer from "../footer/Footer";
const Contact = () => {
	return (
		<div className="Contact">


			<ScrollContainer>
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
				</ScrollPage>
			</ScrollContainer>
			<Footer />
		</div>
	);
};

export default Contact;
