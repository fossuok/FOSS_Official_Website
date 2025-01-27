"use client";
import { Container, Indicator } from "@mantine/core";
import { Calendar } from "@mantine/dates";

export function Section1() {
  return (
    <Container size={800} p={100}>
      <Calendar
        static
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Container>
  );
}
