"use client";
import {
  Image,
  Container,
  Box,
  Flex,
  Badge,
  Grid,
  Text,
  Card,
  Avatar,
  Group,
  Stack,
  Button,
  Indicator,
} from "@mantine/core";
import { useParams } from "next/navigation";
import classes from "./page.module.css";
import { useEffect, useState } from "react";
import { EventCardProps } from "@/data/EventCardProp";
import { eventsData } from "@/data/EventsData";
import Link from "next/link";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState<EventCardProps | null>(null);

  useEffect(() => {
    if (id) {
      for (const ev of eventsData) {
        if (ev.id.toString() === id) {
          setEvent(ev);
          break;
        }
      }
    }
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <Container size={1200} py={50} px={20}>
      <Link href="/events" className={classes.link}>
        👈 View Event List
      </Link>

      <Image
        mah={380}
        style={{ borderRadius: "1rem" }}
        my={30}
        fit="cover"
        src={event.imageUrl.src}
        alt={event.title}
      />
      <h1 className={classes.title}>{event.title}</h1>

      <Box py="20">
        <Flex wrap="wrap" gap="20" align="center">
          <Indicator
            disabled={!event.open ? true : false}
            color="red"
            processing
          >
            <Button
              radius={50}
              w={250}
              component="a"
              href={event.register}
              target="_blank"
              data-disabled={!event.open ? true : undefined}
              onClick={(e) => {
                if (!event.open) {
                  e.preventDefault();
                }
              }}
              color={event.record ? "teal" : undefined}
            >
              {event.open && event.record ? "Recording Available" : "Register"}
            </Button>
          </Indicator>
          {event.tags.map((tag) => (
            <Badge key={tag} size="lg" color="teal" variant="light">
              {tag}
            </Badge>
          ))}
        </Flex>
      </Box>

      <Grid pt={40}>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <Card radius="md" bg="transparent">
            <h3>Event Details</h3> <Box h={2} bg="teal" mb={30} />
            <Stack>
              <Group>
                <Text>
                  🗓️ {event.contents.weekday}, {event.date}, {event.year}
                </Text>
              </Group>
              <Group>
                <Text>⌛ {event.contents.timerange}</Text>
              </Group>
              <Group>
                <Text>📌 {event.contents.location}</Text>
              </Group>
              <Text className={classes.description}>{event.description}</Text>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Card radius="md" bg="transparent">
            <h3>Speakers</h3>
            <Box h={2} bg="teal" mb={30} />
            {event.speakers.map((speaker) => (
              <Box py={10}>
                <Flex direction="row" align="center" gap="10">
                  <Avatar size={50} src={speaker.src} alt={speaker.name} />
                  <div>
                    <Text fw={600}>{speaker.name}</Text>
                    <Text fz={14} fw={400}>
                      {speaker.role}
                    </Text>
                  </div>
                </Flex>
              </Box>
            ))}
          </Card>

          <Card radius="md" bg="transparent">
            <h2>Agenda</h2>
            <Box h={2} bg="teal" mb={30} />
            {event.contents.agenda.map((agenda) => (
              <Box py={10}>
                <Flex direction="row" align="center" gap="10">
                  <Text fw={600}>{agenda}</Text>
                </Flex>
              </Box>
            ))}
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
