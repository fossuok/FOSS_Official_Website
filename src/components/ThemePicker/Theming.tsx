import {
  Text,
  Group,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./Theming.module.css";
import Image from "next/image";
import Link from "next/link";
const logo = "/FOSS.webp";

export function ThemedLogo() {
  return (
    <>
      <Link href={"/"} style={{ all: "unset", cursor: "pointer" }}>
        <Group>
          <Image src={logo} alt="FOSS Logo" height={35} width={33} />
          <Text
            size="25px"
            fw={800}
            c="light-dark(var(--mantine-color-black), var(--mantine-color-white))"
          >
            FOSSUOK
          </Text>
        </Group>
      </Link>
    </>
  );
}

export function Theming() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      className={classes.btn}
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      color="teal"
      variant="light"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
