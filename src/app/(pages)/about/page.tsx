import { GetInTouch } from "./GetInTouch";
import { Container } from "@mantine/core";
import Section1 from "./section1";

export default function Home() {
  return (
    <div>
      <Section1 />
      <Container size={900}>
        <GetInTouch />
      </Container>
    </div>
  );
}
