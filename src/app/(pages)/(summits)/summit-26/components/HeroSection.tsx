"use client";

import { Container, Group, Button, Image, Text } from "@mantine/core";
import classes from "../page.module.css";
const recUrl = process.env.NEXT_PUBLIC_CDN;

export default function HeroSection() {
	return (
		<Container size={900} className={classes.heroContainer}>
			<div className={classes.inner}>
				<Image
					className={classes.heroLogo}
					src="https://resources.fossuok.org/assets/summit-26/logos/ds26-logo-horizontal.svg"
				/>

				<Text component="h1" className={classes.title}>
					Developer Summit '26 <br />
					at University of Kelaniya
				</Text>

				<Text
					component="h2"
					className={classes.subtitle}
					style={{ fontFamily: "monospace" }}
				>
					"A journey of learning, contribution, and collaboration"
				</Text>
			</div>
			<Group
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button
					size="md"
					radius={50}
					component="a"
					href={`${recUrl}/assets/summit-26/Sponsorship-Proposal-Developer-Summit-26.pdf`}
					target="_blank"
					className={classes.mainBtn}
				>
					Sponsorship Proposal
				</Button>
				{/* <Button
					size="md"
					variant="default"
					radius={50}
					onClick={() => {
						document
							.querySelector("#speakers")
							?.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Speakers
				</Button> */}
				{/* <Button
					size="md"
					variant="default"
					radius={50}
					onClick={() => {
						document
							.querySelector("#events")
							?.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Events
				</Button> */}
			</Group>
		</Container>
	);
}
