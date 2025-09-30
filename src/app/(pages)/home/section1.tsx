"use client";
import {
  Button,
  Container,
  Group,
  Text,
  VisuallyHidden,
  Flex,
  Indicator,
} from "@mantine/core";
import { IconBrandGithubFilled } from "@tabler/icons-react";

import classes from "./section1.module.css";
import GradientBack from "@/components/Gradient/GradientBack";
import { Advert } from "@/components/Advert/Advert";
import { advertData1, advertData4 } from "@/data/AdvertData"; //advert data file in data folder

export default function Section1() {
  return (
    <>
      <div className={classes.wrapper}>
        <GradientBack />
        <VisuallyHidden>
          <Flex gap="lg" justify="center" align="center" wrap={"wrap"}>
            <div className={classes.advert}>
              <Advert data={advertData4} />
            </div>{" "}
            <div className={classes.advert}>
              <Advert data={advertData1} />
            </div>
          </Flex>
        </VisuallyHidden>
        <Container className={classes.inner}>
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
          </h1>
          <Text className={classes.description}>
            Join us on our journey to explore, collaborate, and innovate <br />{" "}
            in the world of FOSS!
          </Text>
          <Group className={classes.controls}>
            <Indicator
              inline
              color="violet"
              size={16}
              processing
              position="top-start"
            >
              <Button
                radius="xl"
                component="a"
                href="https://forms.gle/EibRqsL4d4mzqPhG7"
                target="_blank"
                className={classes.control}
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                Become a Member
              </Button>
            </Indicator>
            <Button
              radius="xl"
              component="a"
              href="https://github.com/fossuok/"
              color="teal"
              variant="light"
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
