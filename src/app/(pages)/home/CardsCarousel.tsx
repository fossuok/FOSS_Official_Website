"use client";

import { Text, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./CardsCarousel.module.css";
import { eventsData } from "@/data/EventsData";
import { EventCard } from "@/components/EventCard/EventCard";
import GradientBack from "@/components/Gradient/GradientBack";

export function CardsCarousel() {
  // only for the first 10 events
  const slides = eventsData.slice(0, 10).map((evt) => (
    <Carousel.Slide key={evt.id}>
      <EventCard {...evt} />
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
          {" "}
          Whether you are looking to learn something new or network with
          like-minded individuals, we've got you covered.
        </Text>
        <Carousel
          controlsOffset="-100px"
          controlSize={40}
          slideSize={{ base: "100%", sm: "80%" }}
          slideGap={{ base: 2, sm: "xl" }}
          align="start"
          slidesToScroll={1}
          loop={true}
          withIndicators
        >
          {slides}
        </Carousel>
      </Container>
    </div>
  );
}
