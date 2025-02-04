import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Group, Card, Badge, Text } from "@mantine/core";
import { ArticleGroupProps } from "@/data/ArticleGroup";
import classes from "./ArticleGroup.module.css";

function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function timeAgo(date: Date): string {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}, ${String(
    today.getMonth() + 1
  ).padStart(2, "0")}, ${String(today.getDate()).padStart(2, "0")}`;

  const now: Date = new Date(formattedDate);

  const currentYear: number = now.getFullYear();
  const dateYear: number = date.getFullYear();
  const currentMonth: number = now.getMonth();
  const dateMonth: number = date.getMonth();

  const yearDiff: number = currentYear - dateYear;
  if (yearDiff === 1) return "a year ago";
  if (yearDiff > 1) return `${yearDiff} years ago`;

  const monthDiff: number = currentMonth - dateMonth;
  if (monthDiff === 1) return "a month ago";
  if (monthDiff === 0) return "this month";
  return `${monthDiff} months ago`;
}

const TimeAgoComponent: React.FC<{ dateString: string }> = ({ dateString }) => {
  const date: Date = new Date(dateString);
  return timeAgo(date);
};
const getColorByType = (type: string) => {
  switch (type) {
    case "Articles":
      return "teal";
    case "Tutorials":
      return "blue";
    case "News":
      return "red";
    case "Projects":
      return "orange";
    default:
      return "teal";
  }
};
export function ArticleGroup({
  article,
  author,
  type,
  profile,
  published,
  url,
}: Readonly<ArticleGroupProps>) {
  return (
    <Link href={url.toString()} className={classes.link}>
      <Card withBorder radius="md" shadow="xl" className={classes.card}>
        <Group justify="space-between">
          <Badge>
            <TimeAgoComponent dateString={published.toString()} />
          </Badge>
          <Badge color={getColorByType(type)} variant="light">
            {type}
          </Badge>
        </Group>

        <Text mih={60} fz="lg" fw={500} mt="md">
          {article}
        </Text>
        {/* <Text fz="sm" c="dimmed" mt={5}>
          Form context management, Switch, Grid and Indicator components
          improvements, new hook and 10+ other changes
        </Text> */}

        <Group justify="left" mt="md">
          <Image
            src={profile}
            alt={titleCase(author.toString())}
            width={54}
            height={54}
            decoding="async"
            loading="eager"
            className={classes.image}
          />{" "}
          <div>By {titleCase(author.toString())}</div>
        </Group>
      </Card>
    </Link>
  );
}
