"use client";
import { Carousel } from "@mantine/carousel";
import {
  Button,
  Paper,
  Text,
  Title,
  useMantineTheme,
  Container,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./CardsCarousel.module.css";
import { data } from "@/data/HomeCarousel";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="lg"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size={800} pt={100} pb={100}>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: 2, sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 1}
        loop={true}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
