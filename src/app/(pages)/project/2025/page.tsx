"use client";
import { Container, Group, Button } from "@mantine/core";
import ImgGrid from "./ImgGrid";
import GradientBack from "@/components/Gradient/GradientBack";

import { NavbarTimeline } from "../timeline";
import SponserCards from "./components/SponserCards";
import SpeakerGrid from "./components/SpeakerGrid";
import { SummitEvent } from "./SummitEvent";
import CommitteeGrid from "./components/CommitteeGrid";
import classes from "./page.module.css";

const recUrl = process.env.NEXT_PUBLIC_CDN;

export default function Summit25() {
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
            <Button
              size="md"
              radius={50}
              component="a"
              href={`${recUrl}/documents/sponsorship proposal 25.pdf`}
              target="_blank"
            >
              Sponsorship Oppotunity
            </Button>
            <Button
              size="md"
              variant="default"
              radius={50}
              onClick={() => {
                document
                  .querySelector("#speakers")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Speakers
            </Button>
            <Button
              size="md"
              variant="default"
              radius={50}
              onClick={() => {
                document
                  .querySelector("#events")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Events
            </Button>
          </Group>
        </Container>
      </div>
      <div id="sponsors">
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
      <div id="speakers">
        <SpeakerGrid
          cards={[{ title: "Meet the Speakers", content: "", type: 2 }]}
        />
      </div>
      <div id="events">
        <SummitEvent />
      </div>
      <div id="oc">
        <CommitteeGrid
          cards={[{ title: "Organizing Committee", content: "", type: 3 }]}
        />
      </div>
    </>
  );
}
