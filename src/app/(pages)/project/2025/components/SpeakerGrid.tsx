"use client";

import styles from "../Cards.module.css";

import { Box, Title, Text } from "@mantine/core";
import SpeakerCard from "./SpeakerCard";

import speakerList from "../lib/speakerList";

type CardProps = {
	title: string;
	content: string;
	type: 1 | 2 | 3; // Determines background gradient
};

const SpeakerGrid = ({ cards }: { cards: CardProps[] }) => {
	return (
		<div className={styles.container}>
			{cards.map((card, index) => (
				<Box key={index} className={styles.box} data-type={card.type}>
					<span></span>
					<Box className={styles.content}>
						<Title fz={32}>{card.title}</Title>
						<Text pb={50}>{card.content}</Text>
					</Box>
					<Box className={styles.content}>
						{speakerList.map((speaker, index) => {
							return (
								<SpeakerCard
									key={index}
									fname={speaker.fname}
									lname={speaker.lname}
									email={speaker.email}
									position={speaker.position}
									linkedin={speaker.linkedin}
									picture={speaker.picture}
								/>
							);
						})}
					</Box>
				</Box>
			))}
		</div>
	);
};

export default SpeakerGrid;
