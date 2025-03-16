"use client";

import { Text, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./CardsCarousel.module.css";
import { eventsData } from "@/data/EventsData";
import { EventCard } from "@/components/EventCard/EventCard";
import GradientBack from "@/components/Gradient/GradientBack";
import { useMemo } from "react";
import { parseEventDate } from "@/utils/dateUtils";

export function CardsCarousel() {
  const slides = eventsData.map((event) => (
    <Carousel.Slide key={event.id}>
      <EventCard {...event} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.wrapper}>
      <GradientBack />
      <Container size={1200} pt={100} pb={100}>
        <h1 className={classes.title}>
          Latest{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "violet", to: "grape" }}
            inherit
          >
            Events
          </Text>{" "}
        </h1>
        <Text className={classes.discription}>
          Whether you are looking to learn something new or network with
          like-minded individuals, we've got you covered.
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
