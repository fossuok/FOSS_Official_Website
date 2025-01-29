"use client";
import { Modal, Button, Indicator, Image, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Advert.module.css";

interface AdvertProps {
  data: {
    topic: string;
    image: string;
    description: string;
    weblink: string;
  };
}

export function Advert({ data }: AdvertProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const logo = `/advert/${data.image}`;

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size="auto"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 5,
        }}
      >
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>{data.topic}</Title>

            <Text maw="600px" fz="sm" c="dimmed">
              {data.description}
            </Text>

            <div className={classes.controls}>
              <Button
                component="a"
                href={data.weblink}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.control}
              >
                Learn More
              </Button>
            </div>
          </div>
          <Image
            src={logo}
            alt={data.topic}
            maw="300px"
            className={classes.image}
          />
        </div>
      </Modal>

      <Indicator inline label="New" size={16} processing>
        <Button
          variant="light"
          color="green"
          radius="xl"
          size="md"
          onClick={open}
        >
          {data.topic}
        </Button>
      </Indicator>
    </>
  );
}
