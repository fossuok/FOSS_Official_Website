import { IconHeart } from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  List,
} from "@mantine/core";
import classes from "./AboutCard.module.css";

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
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={300} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Badge size="sm" variant="light">
            {organization}
          </Badge>
          <Text fz="lg" fw={500}></Text>
        </Group>
        <Text fz="xl" mt="xs" ml="xs" fw={800}>
          {title}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text fz="md" fw={700} mt="md">
          Our Mission:
        </Text>
        <List size="sm" mt="xs">
          {mission.map((item, index) => (
            <List.Item key={index}>
              <Text span fw={600}>
                {item.split(":")[0]}:
              </Text>
              <Text span>{item.split(":")[1]}</Text>
            </List.Item>
          ))}
        </List>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text fz="md" fw={700} mt="md">
          What We Do:
        </Text>
        <List size="sm" mt="xs">
          {activities.map((item, index) => (
            <List.Item key={index}>
              <Text span fw={600}>
                {item.split(":")[0]}:
              </Text>
              <Text span>{item.split(":")[1]}</Text>
            </List.Item>
          ))}
        </List>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text fz="md" fw={700} mt="md">
          Our Goals:
        </Text>
        <List size="sm" mt="xs">
          {goals.map((item, index) => (
            <List.Item key={index}>
              <Text span fw={600}>
                {item.split(":")[0]}:
              </Text>
              <Text span>{item.split(":")[1]}</Text>
            </List.Item>
          ))}
        </List>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Join with Us!
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
