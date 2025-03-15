"use client";

import styles from "../css/Cards.module.css";

import { Box, Title, Text } from "@mantine/core";
import CommiteeCard from "./CommiteeCard";

import commiteeList from "../lib/commiteeList";

type CardProps = {
	title: string;
	content: string;
	type: 1 | 2 | 3; // Determines background gradient
};

const CommiteeGrid = ({ cards }: { cards: CardProps[] }) => {
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
						{commiteeList.map((member, index) => {
							return (
								<CommiteeCard
									key={index}
									fname={member.fname}
									lname={member.lname}
									email={member.email}
									position={member.position}
									linkedin={member.linkedin}
									picture={member.picture}
								/>
							);
						})}
					</Box>
				</Box>
			))}
		</div>
	);
};

export default CommiteeGrid;
