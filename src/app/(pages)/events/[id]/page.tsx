"use client";
import {
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
import Image from "next/image";
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

  if (!event)
    return (
      <Container size={1200} py={50} px={20}>
        <Link href="/events" className={classes.link}>
          👈 View Event List
        </Link>
        <Text py={100} c="dimmed" size="lg" ta="center">
          Unfortunately, you may have mistyped the address, or the page has been
          moved to another URL.
        </Text>
      </Container>
    );

  return (
    <Container size={1200} py={50} px={20}>
      <Link href="/events" className={classes.link}>
        👈 View Event List
      </Link>
      <Box
        style={{
          position: "relative",
          width: "100%",
          height: "380px",
          borderRadius: "1rem",
          overflow: "hidden",
          margin: "30px 0 30px 0",
        }}
      >
        <Image
          src={event.imageUrl.src}
          alt={event.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      {/* <Image
        mah={380}
        style={{ borderRadius: "1rem" }}
        my={30}
        fit="cover"
        src={event.imageUrl.src}
        alt={event.title}
      /> */}
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
            <span key={tag}>
              <Badge size="lg" color="teal">
                {tag}
              </Badge>
              {tag === "ODS25" && (
                <Link href="https://fossuok.org/project/ods25" target="_blank">
                  <Badge
                    color="violet"
                    size="lg"
                    variant="light"
                    mx={10}
                    style={{ cursor: "pointer" }}
                  >
                    more 👉
                  </Badge>
                </Link>
              )}
            </span>
          ))}
        </Flex>
      </Box>

      <Grid pt={40}>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <Card radius="md" bg="transparent">
            <h2>Event Details</h2> <Box h={2} bg="teal" mb={30} />
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
            <h2>Speakers</h2>
            <Box h={2} bg="teal" mb={30} />
            {event.speakers.map((speaker, index) => (
              <Box key={speaker.name || index} py={10}>
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
            {event.contents.agenda.map((agenda, index) => (
              <Box key={agenda || index} py={10}>
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
