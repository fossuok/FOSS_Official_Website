import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./not-found.module.css";
import Link from "next/link";

export default function NotFoundTitle() {
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group justify="center">
        <Link href="/">
          <Button variant="subtle" size="md" color="violet">
            Take me back to home page
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
