"use client";

import { Box, Title, Text, Button } from "@mantine/core";
import styles from "./Cards.module.css";
import { CardSpo } from "./CardSpo";

type CardProps = {
  title: string;
  content: string;
  type: 1 | 2 | 3; // Determines background gradient
};

const SponserCards = ({ cards }: { cards: CardProps[] }) => {
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
            <CardSpo />
            <CardSpo />
            <CardSpo />
            <CardSpo />
            <CardSpo />
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default SponserCards;
