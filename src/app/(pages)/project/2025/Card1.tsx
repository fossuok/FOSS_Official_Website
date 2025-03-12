import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import { Card, Center, Group, Text, useMantineTheme } from "@mantine/core";
import classes from "./Card1.module.css";

export function Card1() {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="https://mantine.dev/"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)",
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            Journey to Swiss Alps
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              Robert Gluesticker
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}
