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
import { Carousel } from "@mantine/carousel";
import classes from "./AboutCard.module.css";
import { mockdata } from "@/data/AboutUsData";

export default function AboutCard() {
  const { image, title, organization, mission, activities, goals } = mockdata;
  const slides = image.map((img) => (
    <Carousel.Slide key={img.src}>
      <Image radius="lg" fit="fill" src={img.src} alt={title} mih={300} />
    </Carousel.Slide>
  ));
  return (
    <div className={classes.wrapper}>
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>About FOSSUOK</h1>
        <Carousel
          controlsOffset="-100px"
          controlSize={40}
          slideSize={{ base: "100%", sm: "100%" }}
          slideGap={{ base: 2, sm: "xl" }}
          align="start"
          slidesToScroll={1}
          loop={true}
        >
          {slides}
        </Carousel>

        <Card withBorder radius="lg" p="xl" className={classes.card}>
          <Card.Section className={classes.section}>
            <Group justify="center">
              <Badge size="lg" color="violet" variant="light">
                {organization}
              </Badge>
            </Group>
          </Card.Section>

          {/* Mission Section */}
          <Card.Section className={classes.section}>
            <Text fz="md" fw={700} mt="md">
              Our Mission:
            </Text>
            <Table withRowBorders={false} mt="xs">
              <Table.Tbody>
                {mission.map((item) => {
                  const [missionTitle, missionDescription] = item.split(":");
                  return (
                    <Table.Tr key={missionTitle}>
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
              </Table.Tbody>
            </Table>
          </Card.Section>

          {/* Activities Section */}
          <Card.Section className={classes.section}>
            <Text fz="md" fw={700} mt="md">
              What We Do:
            </Text>
            <Table withRowBorders={false} mt="xs">
              <Table.Tbody>
                {activities.map((item) => {
                  const [serviceTitle, serviceDescription] = item.split(":");
                  return (
                    <Table.Tr key={serviceTitle}>
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
              </Table.Tbody>
            </Table>
          </Card.Section>

          {/* Goals Section */}
          <Card.Section className={classes.section}>
            <Text fz="md" fw={700} mt="md">
              Our Goals:
            </Text>
            <Table withRowBorders={false} mt="xs">
              <Table.Tbody>
                {goals.map((item) => {
                  const [goalTitle, goalDescription] = item.split(":");
                  return (
                    <Table.Tr key={goalTitle}>
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
              </Table.Tbody>
            </Table>
          </Card.Section>
        </Card>
      </Container>
    </div>
  );
}
