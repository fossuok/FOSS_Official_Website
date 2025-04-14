"use client";

import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Indicator,
  Image,
  Text,
  Title,
  Skeleton,
} from "@mantine/core";

import classes from "./Advert.module.css";
import { AdvertProps } from "@/data/AdvertData";

export function Advert({ data }: Readonly<AdvertProps>) {
  const [isOpen, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(true);

  const advertButton = (
    <Button
      variant="light"
      color={data.color}
      radius="xl"
      size={data.size}
      onClick={open}
    >
      {data.topic}
    </Button>
  );

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={close}
        withCloseButton={false}
        centered
        size="auto"
        radius="lg"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 5,
        }}
      >
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>{data.topic}</Title>
            <Text maw={600} fz="sm" c="dimmed">
              {data.description}
            </Text>

            <div className={classes.controls}>
              <Button
                component="a"
                href={data.weblink}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.control}
                radius="xl"
              >
                See More
              </Button>
            </div>
          </div>

          <Skeleton maw={400} h="auto" visible={loading}>
            <Image
              src={data.image.src}
              alt={data.topic}
              maw={400}
              className={classes.image}
              radius={25}
              onLoad={() => setLoading(false)}
            />
          </Skeleton>
        </div>
      </Modal>

      {data.tag ? (
        <Indicator
          inline
          color={data.color}
          label={data.tag}
          size={16}
          processing={data.glow}
        >
          {advertButton}
        </Indicator>
      ) : (
        advertButton
      )}
    </>
  );
}
