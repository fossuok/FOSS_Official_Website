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
import Image from "next/image"; // or import { Image } from "@mantine/core";
import logo from "../../../public/FOSS.png";

export function ThemedLogo() {
  return (
    <>
      <Group>
        <Image src={logo} alt="FOSS Logo" width={40} height={40} />
        <Text fw={700}>FOSS UoK</Text>
      </Group>
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
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
