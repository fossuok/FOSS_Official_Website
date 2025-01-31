"use client";

import classes from "./section1.module.css";
import { Button, Container, Group, Text } from "@mantine/core";

const scrollToContact = () => {
  const element = document.getElementById("contactUs");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Section1() {
  return (
    <>
      <div className={classes.wrapper}>
        <Container size={800} className={classes.inner}>
          <h1 className={classes.title}>
            FOSS Community - University of Kelaniya
          </h1>

          <Group className={classes.controls}>
            <Button
              size="xl"
              component="a"
              onClick={scrollToContact}
              className={classes.control}
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
            >
              Contact Us!
            </Button>

            <Text className={classes.description}>
              We are a community of students who are passionate about Free and
              Open Source Software. We are dedicated to promoting the use of
              FOSS and contributing to the FOSS community.
            </Text>
          </Group>
        </Container>
      </div>
    </>
  );
}
