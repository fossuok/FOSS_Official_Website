import { Avatar, Badge, Paper, Text } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";

interface SpeakerCardProps {
  fname: string;
  lname: string;
  email: string;
  position: string;
  linkedin: string;
  picture: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  fname,
  lname,
  email,
  position,
  linkedin,
  picture,
}) => {
  return (
    <Paper radius="xl" p="lg" bg="transparent">
      <Avatar src={picture} size={240} radius={30} mx="auto" />

      <a
        href={linkedin}
        target="_blank"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "0px",
          background: "transparent",

          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <IconBrandLinkedin size={36} />
      </a>

      <Text pt={5} ta="left" fz="xl" fw={700}>
        {fname + " " + lname}
      </Text>
      <Text ta="left" fz="sm" maw={240}>
        {email + " • " + position}
      </Text>
    </Paper>
  );
};

export default SpeakerCard;
