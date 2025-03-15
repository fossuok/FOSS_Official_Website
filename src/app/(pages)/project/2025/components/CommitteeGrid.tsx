"use client";

import styles from "../css/Cards.module.css";

import { Box, Title, Text } from "@mantine/core";
import CommitteeCard from "./CommitteeCard";

import committeeList from "../lib/committeeList";

type CardProps = {
	title: string;
	content: string;
	type: 1 | 2 | 3; // Determines background gradient
};

const CommitteeGrid = ({ cards }: { cards: CardProps[] }) => {
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
						{committeeList.map((member, index) => {
							return (
								<CommitteeCard
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

export default CommitteeGrid;
