"use client";
import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import bg from "@/images/FOSS.png";
import classes from "./GetInTouch.module.css";

export function GetInTouch() {
  return (
    <>
      <Text id="contactUs" fz="2rem" fw={700} className={classes.title}>
        Reach Out to Us
      </Text>

      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div
            className={classes.contacts}
            style={{
              backgroundImage: ` url(${bg.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              opacity: 0.1,
              // filter: "blur(20px)",
            }}
          >
            {/* <ContactIconsList /> */}
          </div>

          <form
            className={classes.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput label="Your email" placeholder="Email" required />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                styles={{
                  input: {
                    height: "100px",
                    resize: "vertical",
                  },
                }}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </>
  );
}
