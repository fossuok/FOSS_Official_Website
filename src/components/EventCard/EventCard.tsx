import { useRouter } from "next/navigation";
import {
  Paper,
  Flex,
  Text,
  Box,
  Title,
  Badge,
  Container,
  Button,
  BackgroundImage,
} from "@mantine/core";
import Image from "next/image";
import { EventCardProps } from "@/data/EventCardProp";
import { SpeakerCard } from "./SpeakerCard";
import classes from "./EventCard.module.css";

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

  // Handle click event to navigate to the event details page
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
            style={{
              position: "relative",
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              src={imageUrl.src}
              alt={title}
              fill
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

            {speakers.map((speaker) => (
              <SpeakerCard
                key={speaker.name}
                name={speaker.name}
                alt={speaker.alt}
                src={speaker.src}
              />
            ))}
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
              href={register}
              target="_blank"
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
