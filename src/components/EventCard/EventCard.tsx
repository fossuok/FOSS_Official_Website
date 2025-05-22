import { useRouter } from "next/navigation";
import {
  Paper,
  Flex,
  Avatar,
  Text,
  Box,
  Title,
  Badge,
  Container,
  Button,
  Tooltip,
} from "@mantine/core";
import Image from "next/image";
import { EventCardProps } from "@/data/EventCardProp";
import { SpeakerCard } from "./SpeakerCard";
import classes from "./EventCard.module.css";
import Link from "next/link";

export const EventCard = ({
  id,
  title,
  register,
  open,
  record,
  date,
  year,
  description,
  imageUrl,
  speakers,
  tags,
}: Readonly<EventCardProps>) => {
  const router = useRouter(); // Initialize the router

  // Handle click event
  const handleCardClick = () => {
    router.push(`/events/${id}`);
  };

  return (
    <Container w="100%" size={1000} py="30">
      <Paper
        radius="5"
        shadow="lg"
        p="12"
        withBorder={true}
        style={{ cursor: "pointer" }}
        onClick={handleCardClick}
      >
        <Flex direction="row" gap="20" justify="space-between">
          {/* Date Time */}
          <Flex
            direction="column"
            gap="md"
            align="center"
            justify="space-between"
          >
            <Text
              pb={10}
              fw={700}
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {date}
            </Text>
            <Box
              style={(theme) => ({
                width: "1px",
                height: "12rem",
                backgroundColor: theme.colors.gray[6],
              })}
            />
            <Text
              pt={10}
              fw={700}
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {year}
            </Text>
          </Flex>
          <Box
            visibleFrom="xs"
            style={{
              position: "relative",
              width: "100%",
              height: "410px", // fixed or dynamic height
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              src={imageUrl.src}
              alt={title}
              fill
              sizes="720px"
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Content */}
          <Flex
            h={400}
            direction="column"
            gap="10"
            mt="10"
            justify={"space-around"}
            className={classes.customFlex}
          >
            <Title lineClamp={3} order={2}>
              {title}
            </Title>

            <Text lineClamp={2}>{description}</Text>

            {speakers.length > 2 ? (
              <div>
                <Text fw={800} pb={10}>
                  Meet the Speakers
                </Text>
                <Avatar.Group>
                  {speakers.map((speaker) => (
                    <Tooltip key={speaker.name} label={speaker.name} withArrow>
                      <Avatar src={speaker.src} alt={speaker.alt} size={52} />
                    </Tooltip>
                  ))}
                </Avatar.Group>
              </div>
            ) : (
              speakers.map((speaker) => (
                <SpeakerCard
                  key={speaker.name}
                  name={speaker.name}
                  alt={speaker.alt}
                  src={speaker.src}
                />
              ))
            )}
            <Box py="10">
              <Flex direction="row" gap="10">
                {tags.map((tag) => (
                  <Badge key={tag} color="teal" variant="light">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Box>
            <Button
              radius={50}
              component="a"
              href={`/events/${id}`}
              target="_self"
              data-disabled={!open ? true : undefined}
              onClick={(e) => {
                if (!open) {
                  e.preventDefault();
                }
              }}
              color={record ? "teal" : undefined}
            >
              {open && record ? "Recording Available" : "Register"}
            </Button>
          </Flex>
        </Flex>
      </Paper>
    </Container>
  );
};
