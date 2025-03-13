import { Container, Group, Button, Text, Grid, Skeleton } from "@mantine/core";
import SponserCards from "./SponserCards";
import OC from "./OcCards";
import classes from "./page.module.css";
import GradientBack from "@/components/Gradient/GradientBack";
import { NavbarTimeline } from "../timeline";
import ImgGrid from "./ImgGrid";

import { Metadata } from "next";
import SummitSpeakerCard from "./SummitSpeakerCards";
import { SummitEvent } from "./SummitEvent";

export const metadata: Metadata = {
  title: "Open Dev Summit 25",
  description: "Open Dev Summit 25 the biggest foss developer summit at uok.",
  openGraph: {
    title: "FOSS Community - University of Kelaniya",
    description: "Open Dev Summit 25 the biggest foss developer summit at uok.",
    type: "website",
    url: "https://dev.fossuok.org/project/2025", //update
    images: [{ url: "https://dev.fossuok.org/FOSS.webp" }],
  },
};

export default function Home() {
  return (
    <>
      <div className={classes.wrapper}>
        <GradientBack />
        <NavbarTimeline label={"OPEN DEV SUMMIT '25"} />
        <Container size={900}>
          <div className={classes.inner}>
            <h1 className={classes.title}>
              Open-Dev Summit '25 <br />
              at University of Kelaniya
            </h1>

            <Group justify="center" className={classes.controls}>
              <p className={classes.description}>
                May -<sup></sup> 2025 <br />
                University of Kelaniya, Sri Lanka
              </p>
            </Group>
          </div>
          <Group
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button size="md" radius={50}>
              Sponsorship Oppotunity
            </Button>
            <Button size="md" variant="default" radius={50}>
              Speakers
            </Button>
            <Button size="md" variant="default" radius={50}>
              Events
            </Button>
          </Group>
        </Container>
      </div>
      <div>
        <SponserCards
          cards={[{ title: "Our Sponsors", content: "", type: 1 }]}
        />
      </div>

      <div className={classes.wrapper}>
        <GradientBack />
        <Container size={1500}>
          <div className={classes.inner}>
            <h1 className={classes.title1}>
              LEARN ABOUT <br />
              FREE AND OPEN-SOURCE SOFTWARE
            </h1>
            <Button
              visibleFrom="xs"
              color="black"
              c="white"
              size="xl"
              radius="xl"
              m={20}
            >
              AI AND DATA SCIENCE
            </Button>
            <Button
              visibleFrom="xs"
              color="black"
              c="white"
              size="xl"
              radius="xl"
              m={20}
            >
              SOFTWARE DEVELOPMENT
            </Button>
            <Button
              visibleFrom="xs"
              color="black"
              c="white"
              size="xl"
              radius="xl"
              m={20}
            >
              DEVOPS AND CLOUD SECURITY
            </Button>
            <Button
              visibleFrom="xs"
              color="black"
              c="white"
              size="xl"
              radius="xl"
              m={20}
            >
              MOBILE DEVELOPMENT
            </Button>
          </div>
          <ImgGrid />
        </Container>
      </div>
      <div>
        <SummitSpeakerCard
          cards={[{ title: "Meet the Speakers", content: "", type: 2 }]}
        />
      </div>

      <SummitEvent />

      <div>
        <OC cards={[{ title: "Organizing Commitee", content: "", type: 3 }]} />
      </div>
    </>
  );
}
