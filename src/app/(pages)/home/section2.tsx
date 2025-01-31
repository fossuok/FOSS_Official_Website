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
import img1 from "@/images/home/uok.png";
import img2 from "@/images/home/fosslk_logo.png";
import codeImg from "@/images/home/github.jpg";
import learn from "@/images/home/learn.jpg";
import share from "@/images/home/share.jpg";

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
          <Grid.Col span={6}>
            <BackgroundImage
              className={classes.background}
              src={codeImg.src}
              radius="sm"
            >
              <Text className={classes.word} mih={120} c="white">
                Code
              </Text>
            </BackgroundImage>
          </Grid.Col>

          <Grid.Col span={6}>
            <BackgroundImage
              className={classes.background}
              src={learn.src}
              radius="sm"
            >
              <Text className={classes.word} mih={120} c="White">
                Learn
              </Text>
            </BackgroundImage>
          </Grid.Col>

          <Grid.Col span={6}>
            <BackgroundImage
              className={classes.background}
              src={share.src}
              radius="sm"
            >
              <Text className={classes.word} mih={120} c="White">
                Share
              </Text>
            </BackgroundImage>
          </Grid.Col>
          <Grid.Col span={6}>
            <BackgroundImage
              className={classes.background}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
              radius="sm"
            >
              <Text className={classes.word} mih={120} c="white">
                Lead
              </Text>
            </BackgroundImage>
          </Grid.Col>

          <Grid.Col>
            <Card radius="md" className={classes.canvas}>
              <Image src={img1.src} alt="University of Kelaniya" />
            </Card>
          </Grid.Col>

          <Grid.Col>
            <Card radius="md" className={classes.canvas}>
              <Image src={img2.src} alt="FOSS Sri Lanka" />
            </Card>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
