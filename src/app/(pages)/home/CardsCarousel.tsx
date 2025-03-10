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
import classes from "./CardsCarousel.module.css";
import { upcomingData } from "@/data/UpcomingEvents";
import { EventCard } from "@/components/EventCard/EventCard";
import GradientBack from "@/components/Gradient/GradientBack";

export function CardsCarousel() {
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
          controlsOffset="xs"
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
