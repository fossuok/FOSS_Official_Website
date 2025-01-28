"use client";

import {
  useComputedColorScheme,
  useMantineColorScheme,
  ActionIcon,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import Image from "next/image";
import cx from "clsx";
import classes from "./Theming.module.css";
import logoDark from "../../../public/logo-d.png";
import logoLight from "../../../public/logo-l.png";
import Link from "next/link";

// ThemedLogo Component
export function ThemedLogo() {
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  // Choose the logo based on the theme
  const logo = computedColorScheme === "dark" ? logoDark : logoLight;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/" className={classes.link}>
        <Image
          src={logo}
          alt="Themed Logo"
          height={40} // Adjust size as needed
          priority={computedColorScheme === "dark"} // Optimized loading
        />
      </Link>
    </div>
  );
}

// Theming Component
export function Theming() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="default"
      size="xl"
      className={classes.btn}
      aria-label="Toggle color scheme"
    >
      {colorScheme === "dark" ? (
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      ) : (
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      )}
    </ActionIcon>
  );
}
