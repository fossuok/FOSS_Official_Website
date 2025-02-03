import ArticlesHome from "./(pages)/home/ArticlesHome";
import { CardsCarousel } from "./(pages)/home/CardsCarousel";
import { FaqWithImage } from "./(pages)/home/FaqWithImage";
import Section1 from "./(pages)/home/section1";
import Section2 from "./(pages)/home/section2";

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
