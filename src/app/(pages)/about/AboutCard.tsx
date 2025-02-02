"use client";
import {
  Badge,
  Card,
  Group,
  Image,
  Text,
  Container,
  Table,
} from "@mantine/core";
import classes from "./AboutCard.module.css";
import { mockdata } from "@/data/AboutUsData";

export default function AboutCard() {
  const { image, title, organization, mission, activities, goals, badges } =
    mockdata;

  return (
    <div className={classes.wrapper}>
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>About FOSSUOK</h1>

        <Card withBorder radius="lg" p="md" className={classes.card}>
          <Card.Section>
            <Image fit="fill" src={image} alt={title} mah={300} />
          </Card.Section>
        </Card>

        <Card withBorder radius="lg" p="xl" className={classes.card}>
          <Card.Section className={classes.section}>
            <Group justify="center">
              <Badge size="lg" color="violet" variant="light">
                {organization}{" "}
              </Badge>
            </Group>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Text fz="md" fw={700} mt="md">
              Our Mission:
            </Text>
            <Table withRowBorders={false} mt="xs">
              {mission.map((item, index) => {
                const [missionTitle, missionDescription] = item.split(":");
                return (
                  <Table.Tr key={index}>
                    <Table.Td style={{ verticalAlign: "top" }}>
                      <Text span c="teal.5" fw={600}>
                        {missionTitle}:
                      </Text>
                    </Table.Td>
                    <Table.Td style={{ verticalAlign: "top" }}>
                      <Text span>{missionDescription}</Text>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Text fz="md" fw={700} mt="md">
              What We Do:
            </Text>
            <Table withRowBorders={false} mt="xs">
              {activities.map((item, index) => {
                const [serviceTitle, serviceDescription] = item.split(":");
                return (
                  <Table.Tr key={index}>
                    <Table.Td style={{ verticalAlign: "top" }}>
                      <Text span c="blue.5" fw={600}>
                        {serviceTitle}:
                      </Text>
                    </Table.Td>
                    <Table.Td style={{ verticalAlign: "top" }}>
                      <Text span>{serviceDescription}</Text>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Text fz="md" fw={700} mt="md">
              Our Goals:
            </Text>
            <Table withRowBorders={false} mt="xs">
              {goals.map((item, index) => {
                const [goalTitle, goalDescription] = item.split(":");
                return (
                  <Table.Tr key={index}>
                    <Table.Td style={{ verticalAlign: "top" }}>
                      <Text span c="teal.5" fw={600}>
                        {goalTitle}:
                      </Text>
                    </Table.Td>
                    <Table.Td style={{ verticalAlign: "top" }}>
                      <Text span>{goalDescription}</Text>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table>
          </Card.Section>

          {/* <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
              Perfect for you, if you enjoy
            </Text>
            <Group gap={7} mt={5}>
              {features}
            </Group>
          </Card.Section>
          <Group pt={20} className={classes.section}>
            <Button radius="md" style={{ flex: 1 }}>
              Join with Us!
            </Button>
            <ActionIcon variant="default" radius="md" size={36}>
              <IconHeart className={classes.like} stroke={1.5} />
            </ActionIcon>
          </Group> */}
        </Card>
      </Container>
    </div>
  );
}
