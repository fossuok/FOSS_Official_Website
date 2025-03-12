"use client";
import { useState } from "react";
import { IconCalendarStar, IconChevronRight } from "@tabler/icons-react";
import {
  Box,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import classes from "./timeline.module.css";

interface TimelineProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function Timeline({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}: TimelineProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link href={link.link} key={link.label} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={10}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon
              visibleFrom="sm"
              color="teal"
              radius={50}
              variant="light"
              size={30}
            >
              <Icon size={20} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={20}
              style={{ transform: opened ? "rotate(-90deg)" : "none" }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  icon: IconCalendarStar,
  links: [
    { label: "OPEN DEV SUMMIT '25", link: "/project/2025" },
    { label: "OPEN SOURCE SUMMIT '24", link: "/project/2024" },
  ],
};

export function NavbarTimeline({ label }: { label: string }) {
  return (
    <Box
      mih={100}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
      }}
      p="md"
    >
      <Timeline label={label} {...mockdata} />
    </Box>
  );
}
