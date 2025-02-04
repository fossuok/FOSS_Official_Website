"use client";
import { Container, Tabs, Group, Text } from "@mantine/core";
import { Section1 } from "./section1";
import classes from "./page.module.css";
import { Section2 } from "./section2";

export default function Events() {
  return (
    <div className={classes.wrapper}>
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>FOSS UOK Events</h1>
        <Group className={classes.controls}>
          <Text className={classes.description}>
            Stay updated with the latest events happening in the FOSSUOK
            community.
          </Text>
        </Group>
      </Container>

      <Container size={1000}>
        <Tabs color="teal" defaultValue="Upcoming">
          <Tabs.List grow justify="space-between">
            <Tabs.Tab value="Upcoming" fz="lg" fw={700}>
              Upcoming
            </Tabs.Tab>
            <Tabs.Tab fz="lg" fw={700} color="violet" value="Previous">
              Previous
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Upcoming">
            <Section1 />
          </Tabs.Panel>

          <Tabs.Panel value="Previous">
            <Section2 />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
}
