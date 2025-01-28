"use client";
import {
  Image,
  Card,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  Text,
} from "@mantine/core";
import classes from "./section2.module.css";
import img1 from "../../../../public/uok_logo.png";
import img2 from "../../../../public/fosslk_logo.png";

const PRIMARY_COL_HEIGHT = "540px";

export default function Section2() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 4 - var(--mantine-spacing-md) *3/4)`;

  return (
    <Container my="md" pt={100} pb={100}>
      <h1 className={classes.title}>
        What is{" "}
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "violet", to: "grape" }}
          inherit
        >
          FOSS
        </Text>{" "}
        Community at{" "}
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "red", to: "yellow" }}
          inherit
        >
          UOK
        </Text>{" "}
        ?
      </h1>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Card radius="md">
          <Text className={classes.description}>
            Imagine a world where code is shared freely, like a banquet of
            ideas. That’s the essence of Open Source Software (FOSS) – a
            collaborative space where developers build, learn, and innovate
            together, openly sharing knowledge and creations. <br />
            <br />
            And here at the University of Kelaniya, we're building our own FOSS
            haven – a vibrant community of tech enthusiasts, coding wizards, and
            curious minds. We're passionate about empowering everyone. Whether
            you're a coding whiz or a curious beginner, there's a place for you.
          </Text>
        </Card>

        <Grid gutter="md">
          <Grid.Col>
            <Card radius="md">
              <Image src={img1.src} alt="s" height={50} />
            </Card>
          </Grid.Col>
          <Grid.Col>
            <Card radius="md">
              {" "}
              <Image src={img2.src} alt="s" height={50} />
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
