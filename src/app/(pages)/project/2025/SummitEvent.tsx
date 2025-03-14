"use client";

import {
  Button,
  Paper,
  Text,
  Title,
  useMantineTheme,
  Container,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import classes from "@/app/(pages)/home/CardsCarousel.module.css";
import { upcomingData } from "@/data/UpcomingEvents";
import { EventCard } from "@/components/EventCard/EventCard";
import GradientBack from "@/components/Gradient/GradientBack";

export function SummitEvent() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = upcomingData.map((event) => (
    <Carousel.Slide key={event.id}>
      <EventCard {...event} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.wrapper}>
      <GradientBack />
      <Container size={1200} pt={100} pb={100}>
        <h1 className={classes.title}>
          Event{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "violet", to: "grape" }}
            inherit
          >
            Schedule
          </Text>{" "}
        </h1>
        <Text className={classes.discription}>
          Fillout the form and reserve your seat.
        </Text>
        <Carousel
          controlsOffset="-50px"
          slideSize={{ base: "100%", sm: "50%" }}
          slideGap={{ base: 2, sm: "xl" }}
          align="start"
          slidesToScroll={1}
          // slidesToScroll={mobile ? 1 : 1}
          loop={true}
        >
          {slides}
        </Carousel>
      </Container>
    </div>
  );
}
