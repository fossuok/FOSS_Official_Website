"use client";

import GradientBack from "@/components/Gradient/GradientBack";
//openning title
import classes from "./section1.module.css";
import { Button, Container, Group, Text, VisuallyHidden } from "@mantine/core";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { Advert } from "@/components/Advert/Advert";
import { advertData } from "@/data/AdvertData"; //advert data file in data folder

export default function Section1() {
  return (
    <>
      <div className={classes.wrapper}>
        <GradientBack />

        <VisuallyHidden> </VisuallyHidden>
        <div className={classes.advert}>
          <Advert data={advertData} />
        </div>

        <Container size={800} className={classes.inner}>
          <h1 className={classes.title}>
            Embrace the Power
            <br /> of{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
              inherit
            >
              Open-Source
            </Text>{" "}
            and Collaboration
          </h1>

          <Text className={classes.description}>
            Join us on our journey to explore, collaborate, and innovate in the
            world of FOSS!
          </Text>

          <Group className={classes.controls}>
            <Button
              radius="xl"
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
            >
              Join
            </Button>

            <Button
              radius="xl"
              component="a"
              href="https://github.com/mantinedev/mantine"
              size="xl"
              variant="default"
              className={classes.control}
              leftSection={<IconBrandGithubFilled size={18} stroke={1.5} />}
            >
              GitHub
            </Button>
          </Group>
        </Container>
      </div>
    </>
  );
}
