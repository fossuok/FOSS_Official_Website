import { Avatar, Button, Paper, Text } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";

export function CardOc() {
  return (
    <Paper radius="xl" p="lg" bg="transparent">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={120}
        radius={30}
        mx="auto"
      />
      <a
        href="https://github.com/fossuok/"
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
        Jane Ginger
      </Text>
      <Text ta="center" fz="sm">
        jGinger@me.io • Art director
      </Text>
    </Paper>
  );
}
