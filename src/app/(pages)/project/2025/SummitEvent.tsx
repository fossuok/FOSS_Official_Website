"use client";

import { Text, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "@/app/(pages)/home/CardsCarousel.module.css";
import { eventsData } from "@/data/EventsData";
import { EventCard } from "@/components/EventCard/EventCard";
import GradientBack from "@/components/Gradient/GradientBack";
import { useMemo } from "react";
import { parseEventDate } from "@/utils/dateUtils";

export function SummitEvent() {
  const currentDate = new Date();

  // IDs of events to display
  const allowedEventIds = new Set([4, 5, 7, 10, 12]);

  // Separate future and past events
  const filteredEvents = useMemo(() => {
    const futureEvents: typeof eventsData = [];
    const pastEvents: typeof eventsData = [];

    eventsData.forEach((event) => {
      if (allowedEventIds.has(event.id)) {
        const eventDate = parseEventDate(event.date, event.year);
        if (eventDate >= currentDate) {
          futureEvents.push(event);
        } else {
          pastEvents.push(event);
        }
      }
    });

    return [...futureEvents, ...pastEvents]; // Future first, past at the end
  }, [eventsData, currentDate]);

  const slides = filteredEvents.map((event) => (
    <Carousel.Slide key={event.id}>
      <EventCard {...event} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.wrapper}>
      <GradientBack />
      <Container size={1200} pt={100} pb={100}>
        <h1 className={classes.title}>
          Special{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "violet", to: "grape" }}
            inherit
          >
            Events
          </Text>
        </h1>
        <Text className={classes.discription}>
          Don't miss these highlighted events selected for you!
        </Text>
        <Carousel
          controlsOffset="-50px"
          slideSize={{ base: "100%", sm: "50%" }}
          slideGap={{ base: 2, sm: "xl" }}
          align="start"
          slidesToScroll={1}
          loop={true}
        >
          {slides}
        </Carousel>
      </Container>
    </div>
  );
}
