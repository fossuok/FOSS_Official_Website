import { Container, Group, Button, Text } from "@mantine/core";
import SponserCards from "@/app/(pages)/project/2025/SponserCards";
import classes from "./page.module.css";
import GradientBack from "@/components/Gradient/GradientBack";
import { NavbarTimeline } from "../timeline";

import { Metadata } from "next";
import SummitSpeakerCard from "@/app/(pages)/project/2025/SummitSpeakerCards";

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
      <div>
        <SummitSpeakerCard
          cards={[{ title: "Meet the Speakers", content: "", type: 2 }]}
        />
      </div>
    </>
  );
}
