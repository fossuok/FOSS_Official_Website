"use client";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  Container,
  Table,
} from "@mantine/core";
import classes from "./AboutCard.module.css";

//need more improvements to content and styles
const mockdata = {
  image: "/about-team.jpg",
  title: "Empowering Students Through Open Source Innovation",
  organization: "FOSSUOK",
  mission: [
    "Learn: Equip students with the skills and knowledge to navigate and excel in the FOSS ecosystem.",
    "Collaborate: Foster a community where students can work together on impactful projects.",
    "Contribute: Encourage active participation in open-source projects to make a tangible difference in the tech world.",
  ],
  activities: [
    "Workshops: Hands-on sessions to learn and experiment with FOSS tools and technologies.",
    "Webinars: Expert-led discussions on the latest trends and best practices in open source.",
    "Summits: Annual events bringing together enthusiasts to share ideas and showcase projects.",
  ],
  goals: [
    "Educate: Spread awareness and understanding of the FOSS ecosystem.",
    "Empower: Enable students to contribute meaningfully to open-source projects and communities.",
  ],
  badges: [
    { emoji: "💻", label: "Learn" },
    { emoji: "🛠️", label: "Contribute" },
    { emoji: "🤝", label: "Collaborate" },
    { emoji: "🚀", label: "Innovate" },
    { emoji: "🎉", label: "Celebrate" },
  ],
};

export default function AboutCard() {
  const { image, title, organization, mission, activities, goals, badges } =
    mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

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
              <Badge size="lg" variant="light">
                {organization}{" "}
                {/* <Text fz="xl" mt="xs" ml="xs" fw={800}>
                  {title}
                </Text> */}
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
