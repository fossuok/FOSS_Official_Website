import { Container, Group } from "@mantine/core";

import classes from "./page.module.css";
import GradientBack from "@/components/Gradient/GradientBack";
import { NavbarTimeline } from "../timeline";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | FOSS Community UOK ",
  description: "Latest Blogs from FOSS Comunity at UOK.",
  openGraph: {
    title: "FOSS Community - University of Kelaniya",
    description: "Welcome to the Offical Web Page of FOSS Comunity at UOK.",
    type: "website",
    url: "https://dev.fossuok.org/blog", //update
    images: [{ url: "https://dev.fossuok.org/FOSS.webp" }],
  },
};

export default function Summit24() {
  return (
    <div className={classes.wrapper}>
      <GradientBack />
      <NavbarTimeline label={"OPEN DEV SUMMIT '24"} />
      <Container size={900}>
        <div className={classes.inner}>
          <h1 className={classes.title}>
            Open-Source Summit <br />
            at University of Kelaniya
          </h1>
          <Group justify="center" className={classes.controls}>
            <p className={classes.description}>
              April 27<sup>th</sup> 2024 <br />
              University of Kelaniya, Sri Lanka
            </p>
          </Group>
        </div>
      </Container>
      <Container size={1200}>
        <section className={classes.inner}>
          <div className={classes.grid}></div>
        </section>
      </Container>
    </div>
  );
}
