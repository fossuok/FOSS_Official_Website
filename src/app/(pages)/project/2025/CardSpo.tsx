import { Avatar, Button, Paper, Text } from "@mantine/core";

export function CardSpo() {
  return (
    <Paper radius="xl" p="lg" bg="transparent">
      <Avatar
        src="/summit24/FOSS.webp"
        size={240}
        radius={60}
        mx="auto"
        mb="md"
      />

      <a
        href="https://github.com/fossuok/"
        style={{
          width: "100%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center", // Centers text horizontally
          gap: "8px",
          padding: "9px 18px",
          background: "transparent",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background 0.2s",
          textAlign: "center", // Ensures text is centered
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        Sponsor
      </a>
    </Paper>
  );
}
