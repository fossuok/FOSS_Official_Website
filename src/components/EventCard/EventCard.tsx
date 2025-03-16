import { useRouter } from "next/navigation";
import {
  Paper,
  Flex,
  Text,
  Box,
  Image,
  Title,
  Badge,
  Container,
  Button,
  BackgroundImage,
} from "@mantine/core";
import { EventCardProps } from "@/data/EventCardProp";
import { SpeakerCard } from "./SpeakerCard";

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
          <BackgroundImage visibleFrom="xs" src={imageUrl.src}>
            <span></span>
          </BackgroundImage>

          {/* Content */}
          <Flex
            h={400}
            direction="column"
            gap="10"
            mt="10"
            style={(theme) => ({
              width: "100%", // Default to full width
              maxWidth: 240, // Default max width
              [`@media (min-width: ${theme.breakpoints.md}px)`]: {
                maxWidth: 300, // Increase width to 300px on md and larger screens
              },
            })}
          >
            <Title order={2}>{title}</Title>
            <Text mb="20">{description}</Text>
            {speakers.map((speaker) => (
              <SpeakerCard
                key={speaker.name}
                name={speaker.name}
                alt={speaker.alt}
                src={speaker.src}
              />
            ))}
            <Box py="20">
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
