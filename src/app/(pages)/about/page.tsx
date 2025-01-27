import { GetInTouch } from "./GetInTouch";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Container size={900}>
        <h1>About</h1>
        <GetInTouch />
      </Container>
    </div>
  );
}
