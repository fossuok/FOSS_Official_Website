"use client";

import { useRef, useEffect, useState } from "react";
import { Text, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./CardsCarousel.module.css";
import { eventsData } from "@/data/EventsData";
import { EventCard } from "@/components/EventCard/EventCard";
import GradientBack from "@/components/Gradient/GradientBack";
import Autoplay from "embla-carousel-autoplay";

export function CardsCarousel() {
  const [inView, setInView] = useState(false);
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const sectionRef = useRef<HTMLDivElement>(null);

  // observe when carousel enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.3 } // start autoplay when 30% of carousel is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // slides
  const slides = eventsData.slice(0, 10).map((evt) => (
    <Carousel.Slide key={evt.id}>
      <EventCard {...evt} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.wrapper} ref={sectionRef}>
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
          </Text>
        </h1>
        <Text className={classes.discription}>
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
          loop
          withIndicators
          plugins={inView ? [autoplay.current] : []} // start autoplay only when in view
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {slides}
        </Carousel>
      </Container>
    </div>
  );
}
