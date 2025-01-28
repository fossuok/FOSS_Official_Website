import { CardsCarousel } from "./(pages)/home/CardCarousel";
import { FaqWithImage } from "./(pages)/home/FaqWithImage";
import Section1 from "./(pages)/home/section1";
export default function Home() {
  return (
    <div>
      <Section1 />
      <CardsCarousel />
      <FaqWithImage />
    </div>
  );
}
