"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Badge, Indicator } from "@mantine/core";

export function Advert() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 5,
        }}
      >
        {/* Modal content */}
      </Modal>
      <Indicator inline label="New" size={16} processing>
        <Button
          variant="light"
          color="green"
          radius="xl"
          size="md"
          onClick={open}
          //   leftSection={
          //     <Badge color="red" variant="fill">
          //       more
          //     </Badge>
          //   }

          //   rightSection={
          //     <Badge color="white" variant="light">
          //       more
          //     </Badge>
          //   }
        >
          FOSS T-Shirt Are now Available!
        </Button>
      </Indicator>
    </>
  );
}
