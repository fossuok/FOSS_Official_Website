"use client";

import { Container, Tabs, Group, Text } from "@mantine/core";
import { Section1 } from "./section1";
import classes from "./page.module.css";
import { Section2 } from "./section2";
import { eventsData } from "@/data/EventsData";
import { useMemo } from "react";

export default function Events() {
  const currentDate = new Date();

  // Helper function to parse event dates
  const parseEventDate = (dateString: string, year: string): Date => {
    return new Date(`${dateString} ${year}`);
  };

  // Filter events into upcoming and previous
  const upcomingEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const eventDate = parseEventDate(event.date, event.year);
      return eventDate >= currentDate;
    });
  }, [eventsData, currentDate]);

  const previousEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const eventDate = parseEventDate(event.date, event.year);
      return eventDate < currentDate;
    });
  }, [eventsData, currentDate]);

  return (
    <div className={classes.wrapper}>
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>FOSS UOK Events</h1>
        <Group className={classes.controls}>
          <Text className={classes.description}>
            Stay updated with the latest events happening in the FOSSUOK
            community.
          </Text>
        </Group>
      </Container>

      <Container size={1000}>
        <Tabs color="teal" defaultValue="Upcoming">
          <Tabs.List grow justify="space-between">
            <Tabs.Tab value="Upcoming" fz="lg" className={classes.category}>
              Upcoming
            </Tabs.Tab>
            <Tabs.Tab
              fz="lg"
              className={classes.category}
              color="violet"
              value="Previous"
            >
              Previous
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Upcoming">
            <Section1 events={upcomingEvents} />
          </Tabs.Panel>

          <Tabs.Panel value="Previous">
            <Section2 events={previousEvents} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
}