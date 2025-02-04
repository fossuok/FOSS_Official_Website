import { Box, Flex, Avatar, Text } from "@mantine/core";

interface SpeakerProps {
  src: string;
  alt: string;
  name: string;
}

export const SpeakerCard = ({ src, alt, name }: SpeakerProps) => (
  <Box py="10">
    <Flex direction="row" align="center" gap="10">
      <Avatar src={src} alt={alt} />
      <Text fw={600}>{name}</Text>
    </Flex>
  </Box>
);
