import { Container } from "@mantine/core";
import Section1 from "./section1";
import AboutCard from "./AboutCard";
import { GetInTouch } from "./GetInTouch";

export default function About() {
  return (
    <div>
      <Section1 />
      <AboutCard />
      <GetInTouch />
    </div>
  );
}
