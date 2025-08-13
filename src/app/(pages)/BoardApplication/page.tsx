import { Button, Center, Container, Group, Text, Title } from "@mantine/core";
import classes from "./apply-board.module.css";
import Link from "next/link";

export default function ApplyBoard() {
  return (
    <Container className={classes.root}>
      <Title className={classes.title}>
        Board Positions Application 2025-2026
      </Title>
      <Text className={classes.subtitle}>
        Free & Open-Source Software Community
      </Text>
      <Text className={classes.subtitle}>University of Kelaniya</Text>

      <Group justify="center" my={40}>
        <Link
          href="https://docs.google.com/document/d/1CMNVZblHdVedsH5LJVminKoECcHMA9mpZ6BbS8Eqdus/edit?tab=t.0#heading=h.84gvhbsg19xh"
          target="_blank"
        >
          <Button variant="subtle" size="md" color="lime.6">
            Click Here to View Roles & Responsibilities
          </Button>
        </Link>
      </Group>
      <Text c="dimmed" size="md" ta="center" className={classes.description}>
        * Before you proceed, please take a look at (Article 4 & 8). It will
        help you choose where your skills, interests, and passion can make the
        biggest impact.
      </Text>

      <Group justify="center" mt={20}>
        <Link href="https://form.jotform.com/252241603907048">
          <Button
            variant="filled"
            size="md"
            color="lime.8"
            c="black"
            className="btn"
            radius={50}
          >
            Start Board Application
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
