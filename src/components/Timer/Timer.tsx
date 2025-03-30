"use client";

import { useEffect, useState } from "react";
import { Card, Text, Group } from "@mantine/core";
import classes from "./Timer.module.css";

const targetDate = new Date("May 24, 2025 08:30:00").getTime();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return "EXPIRED";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === "EXPIRED") {
    return (
      <Text size="xl" style={{ textAlign: "center" }}>
        EXPIRED
      </Text>
    );
  }

  return (
    <Group justify="center" gap="sm">
      {Object.entries(timeLeft).map(([label, value]) => (
        <Card
          key={label}
          shadow="sm"
          padding="lg"
          radius="md"
          className={classes.timerCard}
        >
          <Text size="xl" fw={700} className={classes.timerText}>
            {value}
          </Text>
          <Text size="sm" c="teal" fw={700}>
            {label.toUpperCase()}
          </Text>
        </Card>
      ))}
    </Group>
  );
}
