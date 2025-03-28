import Section1 from "./(pages)/home/section1";
import Section2 from "./(pages)/home/section2";
import ArticlesHome from "./(pages)/home/ArticlesHome";
import { CardsCarousel } from "./(pages)/home/CardsCarousel";
import { FaqWithImage } from "./(pages)/home/FaqWithImage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FOSS Community - University of Kelaniya",
  description: "Welcome to the Offical Web Page of FOSS Comunity at UOK.",
  openGraph: {
    title: "FOSS Community - University of Kelaniya",
    description: "Welcome to the Offical Web Page of FOSS Comunity at UOK.",
    type: "website",
    url: "https://fossuok.org", //update
    images: [{ url: "https://fossuok.org/FOSS.webp" }],
  },
};

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <CardsCarousel />
      <ArticlesHome />
      <FaqWithImage />
    </div>
  );
}
