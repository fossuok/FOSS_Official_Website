// EventCard.tsx
import {
  Paper,
  Flex,
  Text,
  Box,
  Image,
  Title,
  Badge,
  Container,
} from "@mantine/core";
import { EventCardProps } from "@/data/EventCardProp";
import { SpeakerCard } from "./SpeakerCard";

export const EventCard = ({
  title,
  date,
  year,
  description,
  imageUrl,
  speakers,
  tags,
}: Readonly<EventCardProps>) => {
  return (
    <Container size={800} py="30">
      <Paper radius="5" shadow="xl" p="12" withBorder={false}>
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
          {/* poster */}
          <Image
            visibleFrom="xs"
            w="240"
            fit="cover"
            src={imageUrl.src}
            alt={title}
          />
          {/* content */}
          <Flex direction="column" gap="10" mt="10">
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
          </Flex>
        </Flex>
      </Paper>
    </Container>
  );
};
