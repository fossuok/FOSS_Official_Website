"use client";
import { Accordion, Container, Grid, Image, Title } from "@mantine/core";
import image from "@/images/home/FOSStext.webp";
import classes from "./FaqWithImage.module.css";
import GradientBack from "@/components/Gradient/GradientBack";
import { data } from "@/data/Q&A";

export function FaqWithImage() {
  return (
    <div className={classes.wrapper}>
      <GradientBack />
      <Container size={1200} className={classes.inner}>
        <Grid id="faq-grid" gutter={50} justify="center">
          <Grid.Col span={{ base: 10, md: 6 }} className={classes.background}>
            <Image src={image.src} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 10, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>
            <Accordion
              transitionDuration={500}
              chevronPosition="right"
              variant="separated"
            >
              {data.map((item) => (
                <Accordion.Item
                  key={item.question}
                  className={classes.item}
                  value={item.question}
                >
                  <Accordion.Control>{item.question}</Accordion.Control>
                  <Accordion.Panel>{item.answer}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
