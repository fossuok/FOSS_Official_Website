"use client";
import { useState } from "react";
import {
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import bg from "@/images/FOSS.webp";
import classes from "./GetInTouch.module.css";

export function GetInTouch() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = `Name: ${name}\n\n${message}`;

    const mailtoLink = `mailto:hello@fossuok.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Container pt={80} pb={80} size={1000} className={classes.inner}>
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div
            className={classes.contacts}
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              opacity: 0.1,
            }}
          ></div>

          <form className={classes.form} onSubmit={handleSubmit}>
            <Text id="contactUs" fz="2rem" fw={700} className={classes.title}>
              Reach Out to Us
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label="Your name"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.currentTarget.value)}
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
                value={subject}
                onChange={(event) => setSubject(event.currentTarget.value)}
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                value={message}
                onChange={(event) => setMessage(event.currentTarget.value)}
                maxLength={1000}
                styles={{
                  input: {
                    height: "100px",
                    resize: "vertical",
                  },
                }}
              />

              <Group justify="flex-end" mt="md">
                <Button radius="xl" type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
