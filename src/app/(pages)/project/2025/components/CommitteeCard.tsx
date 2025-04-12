import { Avatar, Paper, Text } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";

interface CommitteeCardProps {
  fname: string;
  lname: string;
  email: string;
  position: string;
  linkedin: string;
  picture: string;
}

const CommitteeCard: React.FC<CommitteeCardProps> = ({
  fname,
  lname,
  email,
  position,
  linkedin,
  picture,
}) => {
  return (
    <Paper radius="xl" p="lg" bg="transparent">
      <Avatar src={picture} size={180} radius={30} mx="auto" />
      <a
        href={linkedin}
        target="_blank"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "4px",
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
      <Text ta="center" fz="lg" fw={500}>
        {fname + " " + lname}
      </Text>
      <Text mb={0} ta="center" fz="sm" miw={240} maw={240}>
        {position}
      </Text>
      <Text ta="center" fz="sm" miw={240} maw={240}>
        {email}
      </Text>
    </Paper>
  );
};

export default CommitteeCard;
