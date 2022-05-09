import React from "react";
import "./Work.scss";
import { Container, Card, Image } from "semantic-ui-react";

import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	FadeIn,
} from "react-scroll-motion";

const Work = () => {
	return (
		<div className="Work">
			<ScrollContainer>
				<ScrollPage page={2}>
					<Animator animation={batch(FadeIn())}>
						<h1>Projects</h1>
						<Container>
					
				<Card.Group itemsPerRow={3}>			
    <Card color='red' >
		<Image src="./images/dinogame.png" wrapped ui={false} />
		<Card.Content>
			<Card.Header>Dino Game</Card.Header>
			<Card.Description>
				A game where you have to dodge the obstacles. Written in Go.
			</Card.Description>
		</Card.Content>
		</Card>
		<Card color='green' >
		<Image src="./images/dinogame.png" wrapped ui={false}/>
		<Card.Content>
			<Card.Header>Dino Game</Card.Header>
			<Card.Description>
				A game where you have to dodge the obstacles. Written in Go.
			</Card.Description>
		</Card.Content>
		</Card>
		<Card color='teal' >
		<Image src="./images/dinogame.png" wrapped ui={false}/>
		<Card.Content>
			<Card.Header>Dino Game</Card.Header>
			<Card.Description>
				A game where you have to dodge the obstacles. Written in Go.
			</Card.Description>
		</Card.Content>
		</Card>

   
</Card.Group>
						
						
						</Container>
					</Animator>
				</ScrollPage>
			</ScrollContainer>
		</div>
	);
};

export default Work;
