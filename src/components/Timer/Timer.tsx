"use client";

import { useEffect, useState } from "react";
import { Card, Text, Group } from "@mantine/core";
import classes from "./Timer.module.css";

const targetDate = new Date("May 24, 2025 08:30:00").getTime();
var isExpired = false;

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    if (distance < 0) {
      return { days, hours, minutes, seconds };
    }

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    isExpired = true;
  }

  return (
    <div>
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
      {isExpired && (
        <Text
          size="xl"
          fz={32}
          fw={700}
          style={{ marginTop: "1rem", textAlign: "center" }}
        >
          Successfully Concluded
        </Text>
      )}
    </div>
  );
}
