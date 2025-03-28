"use client";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import { ThemedLogo } from "../ThemePicker/Theming";
import classes from "./FooterLinks.module.css";
import { data, social_media } from "@/data/FooterData";

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size={1000} className={classes.inner}>
        <div className={classes.logo}>
          <ThemedLogo />
          <Text pt={10} size="xs" c="dimmed" className={classes.description}>
            Free and Open-Source Software Community - University of Kelaniya is
            a community of students who are passionate about open-source
            software and technology.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>

      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025. Free and Open-Source Software Community - University of
          Kelaniya. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            component="a"
            href={social_media.facebook}
            size="lg"
            color="gray"
            variant="subtle"
            target="_blank"
          >
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={social_media.x}
            size="lg"
            color="gray"
            variant="subtle"
            target="_blank"
          >
            <IconBrandX size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={social_media.Github}
            size="lg"
            color="gray"
            variant="subtle"
            target="_blank"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={social_media.LinkedIn}
            size="lg"
            color="gray"
            variant="subtle"
            target="_blank"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
