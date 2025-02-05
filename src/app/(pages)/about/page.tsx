import Section1 from "./section1";
import AboutCard from "./AboutCard";
import { GetInTouch } from "./GetInTouch";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | FOSS Community UOK ",
  description: "Get to know FOSS Comunity at UOK.",
  openGraph: {
    title: "FOSS Community - University of Kelaniya",
    description: "Welcome to the Offical Web Page of FOSS Comunity at UOK.",
    type: "website",
    url: "https://dev.fossuok.org/about", //update
    images: [{ url: "https://dev.fossuok.org/FOSS.webp" }],
  },
};

export default function About() {
  return (
    <div>
      <Section1 />
      <AboutCard />
      <GetInTouch />
    </div>
  );
}
