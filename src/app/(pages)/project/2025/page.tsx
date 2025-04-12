"use client";
import { Container, Group, Button, Timeline, Text } from "@mantine/core";
import ImgGrid from "./ImgGrid";
import GradientBack from "@/components/Gradient/GradientBack";

import { NavbarTimeline } from "../timeline";
import SponserCards from "./components/SponserCards";
import SpeakerGrid from "./components/SpeakerGrid";
import { SummitEvent } from "./SummitEvent";
import CommitteeGrid from "./components/CommitteeGrid";
import classes from "./page.module.css";
import CountdownTimer from "@/components/Timer/Timer";

const recUrl = process.env.NEXT_PUBLIC_CDN;

export default function Summit25() {
  return (
    <>
      <div className={classes.wrapper}>
        <GradientBack />
        <NavbarTimeline label={"OPEN DEV SUMMIT '25"} />
        <CountdownTimer />
        <Container size={900}>
          <div className={classes.inner}>
            <h1 className={classes.title}>
              Open-Dev Summit '25 <br />
              at University of Kelaniya
            </h1>
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
              href={`${recUrl}/assets/Sponsorship Proposal ODS25.pdf`}
              target="_blank"
            >
              Sponsorship Opportunity
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

          <Group justify="center" className={classes.controls}>
            <Container py={100} size={400}>
              <Timeline
                color="teal"
                active={0}
                reverseActive
                bulletSize={24}
                align="left"
              >
                <Timeline.Item title="Workshop 1" className={classes.time}>
                  <Text c="dimmed" size="md">
                    Linux Fundamentals{" "}
                  </Text>
                  <Text>Week 1 - April 26th, 2025</Text>
                  <Button
                    disabled
                    mt={20}
                    size="md"
                    radius="0 50 50 0"
                    component="a"
                    href={`/project/2025`}
                    target="_blank"
                  >
                    Registrations - Coming Soon
                  </Button>
                </Timeline.Item>

                <Timeline.Item title="Workshop 2" className={classes.time}>
                  <Text c="dimmed" size="md">
                    FOSS Tools for Big Data & AI{" "}
                  </Text>
                  <Text>Week 2 - May 3rd, 2025</Text>
                  <Button
                    disabled
                    mt={20}
                    size="md"
                    radius="0 50 50 0"
                    component="a"
                    href={`/project/2025`}
                    target="_blank"
                  >
                    Registrations - Coming Soon
                  </Button>
                </Timeline.Item>

                <Timeline.Item title="Workshop 3" className={classes.time}>
                  <Text c="dimmed" size="md">
                    Building Modern Web Apps with .NET{" "}
                  </Text>
                  <Text>Week 3 - May 6th, 2025</Text>
                  <Button
                    disabled
                    mt={20}
                    size="md"
                    radius="0 50 50 0"
                    component="a"
                    href={`/project/2025`}
                    target="_blank"
                  >
                    Registrations - Coming Soon
                  </Button>
                </Timeline.Item>

                <Timeline.Item title="Workshop 4" className={classes.time}>
                  <Text c="dimmed" size="md">
                    Mobile Application Development{" "}
                  </Text>
                  <Text>Week 3 - May 10th, 2025</Text>
                  <Button
                    disabled
                    mt={20}
                    size="md"
                    radius="0 50 50 0"
                    component="a"
                    href={`/project/2025`}
                    target="_blank"
                  >
                    Registrations - Coming Soon
                  </Button>
                </Timeline.Item>
                <Timeline.Item title="Workshop 5" className={classes.time}>
                  <Text c="dimmed" size="md">
                    Cloud Native Development{" "}
                  </Text>
                  <Text>Week 4 - May 17th, 2025</Text>
                  <Button
                    disabled
                    mt={20}
                    size="md"
                    radius="0 50 50 0"
                    component="a"
                    href={`/project/2025`}
                    target="_blank"
                  >
                    Registrations - Coming Soon
                  </Button>
                </Timeline.Item>
                <Timeline.Item title="SUMMIT DAY" className={classes.time}>
                  <Text c="dimmed" size="md">
                    at University of Kelaniya, Sri Lanka{" "}
                  </Text>

                  <Text>Week 5 - May 24th, 2025</Text>
                  <Button
                    mt={20}
                    size="md"
                    radius="0 50 50 0"
                    component="a"
                    href="https://www.fossuok.org/events/15"
                    target="_blank"
                  >
                    Registrations - Open
                  </Button>
                </Timeline.Item>
              </Timeline>
            </Container>
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
