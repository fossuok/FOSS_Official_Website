"use client";
import {
  Image,
  Card,
  Container,
  Grid,
  SimpleGrid,
  Text,
  BackgroundImage,
} from "@mantine/core";
import classes from "./section2.module.css";
import img1 from "@/images/home/uok.webp";
import img2 from "@/images/home/fosslk_logo.webp";
import codeImg from "@/images/home/github.webp";
import learn from "@/images/home/learn.webp";
import share from "@/images/home/share.webp";
import lead from "@/images/home/lead.webp";

export default function Section2() {
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
          gradient={{ from: "orange.3", to: "yellow" }}
          inherit
        >
          UOK
        </Text>
        ?
      </h1>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Card radius="md">
          <Text className={classes.description}>
            Imagine a world where code is shared freely, not locked away. That’s
            the essence of Open Source Software (FOSS) – a community where
            developers build, learn, and innovate together by sharing knowledge
            and creations. <br />
            <br />
            And here at the University of Kelaniya, we&apos;re building our own
            FOSS haven – a vibrant community of tech enthusiasts, coding
            wizards, and curious minds. We&apos;re passionate about empowering
            everyone. Whether you&apos;re a coding whiz or a curious beginner,
            there&apos;s a place for you.
          </Text>
        </Card>

        <Grid gutter="md">
          <Grid.Col span={6} style={{ cursor: "pointer" }}>
            <BackgroundImage
              className={classes.background1}
              src={codeImg.src}
              radius="sm"
            >
              <Text className={classes.word} mih={120} c="white">
                Code
              </Text>
            </BackgroundImage>
          </Grid.Col>

          <Grid.Col span={6} style={{ cursor: "pointer" }}>
            <BackgroundImage
              className={classes.background2}
              src={learn.src}
              radius="sm"
            >
              <Text className={classes.word} mih={120} c="White">
                Learn
              </Text>
            </BackgroundImage>
          </Grid.Col>

          <Grid.Col span={6} style={{ cursor: "pointer" }}>
            <BackgroundImage
              className={classes.background4}
              src={share.src}
              radius="sm"
            >
              <Text className={classes.word} mih={120} c="White">
                Share
              </Text>
            </BackgroundImage>
          </Grid.Col>

          <Grid.Col span={6} style={{ cursor: "pointer" }}>
            <BackgroundImage
              className={classes.background3}
              src={lead.src}
              radius="sm"
            >
              <Text className={classes.word} mih={120} c="white">
                Lead
              </Text>
            </BackgroundImage>
          </Grid.Col>

          <Grid.Col>
            <Card radius="md" className={classes.canvas}>
              <Image
                fit="contain"
                mah={80}
                src={img1.src}
                alt="University of Kelaniya"
              />
            </Card>
          </Grid.Col>

          <Grid.Col>
            <Card radius="md" className={classes.canvas}>
              <Image
                fit="contain"
                mah={100}
                src={img2.src}
                alt="FOSS Sri Lanka"
              />
            </Card>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
