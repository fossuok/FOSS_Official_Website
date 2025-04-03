"use client";
import { Modal, Button, Indicator, Image, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Advert.module.css";
import { AdvertProps } from "@/data/AdvertData";

export function Advert({ data }: Readonly<AdvertProps>) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size="auto"
        radius={"50px 50px"}
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
                radius={"xl"}
              >
                See More
              </Button>
            </div>
          </div>
          <Image
            src={data.image.src}
            alt={data.topic}
            maw="400px"
            className={classes.image}
            radius={25}
          />
        </div>
      </Modal>
      {/* processing */}
      {data.tag ? (
        <Indicator
          inline
          color={data.color}
          label={data.tag}
          size={16}
          processing={data.glow}
        >
          <Button
            variant="light"
            color={data.color}
            radius="xl"
            size={data.size}
            onClick={open}
          >
            {data.topic}
          </Button>
        </Indicator>
      ) : (
        <Button
          variant="light"
          color={data.color}
          radius="xl"
          size={data.size}
          onClick={open}
        >
          {data.topic}
        </Button>
      )}
    </>
  );
}
