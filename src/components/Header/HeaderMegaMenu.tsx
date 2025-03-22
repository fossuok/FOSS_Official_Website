"use client";

import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Theming, ThemedLogo } from "@/components/ThemePicker/Theming";
import Link from "next/link";
import classes from "./HeaderMegaMenu.module.css";

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  return (
    <Box pb={0} w={"100%"}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/*243- same size as the rightside */}
          <Box className={classes.logo}>
            <ThemedLogo />
          </Box>
          <Group h="100%" gap={0} visibleFrom="md">
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/events" className={classes.link}>
              Events
            </Link>
            <Link href="/about" className={classes.link}>
              About
            </Link>
            <Link href="/blog" className={classes.link}>
              Blog
            </Link>
            <Link href="/leaderboard" className={classes.link}>
              Leaderboard
            </Link>
          </Group>

          <Group visibleFrom="md">
            <Link href="/project/2025" passHref>
              <Indicator
                color="red"
                position="bottom-start"
                processing
                size={10}
              >
                <Button radius="xl">Open Dev Summit '25</Button>
              </Indicator>
            </Link>

            <Theming />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="md"
          />
        </Group>
      </header>

      <Drawer.Root
        opened={drawerOpened}
        onClose={closeDrawer}
        offset={50}
        position="top"
        size="100%"
        transitionProps={{
          transition: "slide-up",
          duration: 400,
          timingFunction: "ease-in-out",
        }}
        hiddenFrom="md"
        zIndex={1000000}
      >
        <Drawer.Overlay backgroundOpacity={0.25} blur={30} />
        <Drawer.Content opacity={0.7} radius="md">
          <Drawer.Body pt={50}>
            <Link href="/" className={classes.link} onClick={toggleDrawer}>
              Home
            </Link>
            <Link
              href="/events"
              className={classes.link}
              onClick={toggleDrawer}
            >
              Events
            </Link>

            <Link href="/about" className={classes.link} onClick={toggleDrawer}>
              About
            </Link>
            <Link href="/blog" className={classes.link} onClick={toggleDrawer}>
              Blog
            </Link>
            <Link
              href="/leaderboard"
              className={classes.link}
              onClick={toggleDrawer}
            >
              Leaderboard
            </Link>

            <Divider my="sm" />

            <Group
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link href="/project/2025" onClick={toggleDrawer}>
                <Button miw={180} radius="xl" size="lg">
                  Summit '25
                </Button>
              </Link>
              <Theming />
            </Group>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </Box>
  );
}
