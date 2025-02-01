"use client";
import { Button, Container, Group, Text, Table, Divider } from "@mantine/core";
import classes from "./section1.module.css";

const scrollToContact = () => {
  const element = document.getElementById("contactUs");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Section1() {
  return (
    <>
      <div className={classes.wrapper}>
        <Container size={800} className={classes.inner}>
          <h1 className={classes.title}>
            FOSS Community University of Kelaniya
          </h1>

          <Group className={classes.controls}>
            <Text className={classes.description}>
              We are a community of students who are passionate about Free and
              Open Source Software. We are dedicated to promoting the use of
              FOSS and contributing to the FOSS community.
            </Text>
            <Divider />
            <Table
              withRowBorders={false}
              style={{ textAlign: "center", margin: "auto" }}
            >
              <Table.Tr fz={"lg"} fw={600}>
                <Table.Td>Founded</Table.Td>
                <Table.Td>Members</Table.Td>
                <Table.Td>Events</Table.Td>
              </Table.Tr>
              <Table.Tr fz={"h2"} fw={900}>
                <Table.Td>2023</Table.Td>
                <Table.Td>150+</Table.Td>
                <Table.Td>6+</Table.Td>
              </Table.Tr>
            </Table>
            <Button
              size="xl"
              component="a"
              onClick={scrollToContact}
              className={classes.btn}
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
              style={{ marginTop: "3rem" }}
            >
              Contact Us!
            </Button>
          </Group>
        </Container>
      </div>
    </>
  );
}
