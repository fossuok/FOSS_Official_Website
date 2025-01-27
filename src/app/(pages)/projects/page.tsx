import { Container } from "@mantine/core";
import { Section1 } from "./section1";
export default function Home() {
  return (
    <div>
      <Container size={800} p={50}>
        <Section1 />
      </Container>
    </div>
  );
}
