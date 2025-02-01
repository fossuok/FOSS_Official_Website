"use client";

import AboutCard from "./AboutCard";
import { GetInTouch } from "./GetInTouch";
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
            <Text className={classes.description}>
              We are a community of students who are passionate about Free and
              Open Source Software. We are dedicated to promoting the use of
              FOSS and contributing to the FOSS community.
            </Text>
            <Button
              size="xl"
              component="a"
              onClick={scrollToContact}
              className={classes.control}
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
              style={{ marginTop: "3rem" }} 
            >
              Contact Us!
            </Button>
          </Group>
        </Container>
      </div>

      <div className={classes.wrapper}>
        <Container size={1000} className={classes.inner}>
          <h1 className={classes.subtitle}>About FOSSUOK</h1>
          <AboutCard />
        </Container>
      </div>

      {/* <div className={classes.wrapper}> */}
      <Container size={1000} className={classes.inner}>
        <GetInTouch />
      </Container>
      {/* </div> */}
    </>
  );
}
