import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArticleGroupProps } from "@/data/ArticleGroup";
import classes from "./ArticleGroup.module.css";

function titleCase(str: String) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function timeAgo(date: Date): String {
  const now: Date = new Date(2025, 5, 5);

  const currentYear: number = now.getFullYear();
  const dateYear: number = date.getFullYear();
  const currentMonth: number = now.getMonth();
  const dateMonth: number = date.getMonth();

  const yearDiff: number = currentYear - dateYear;
  if (yearDiff === 1) return "a year ago";
  if (yearDiff > 1) return `${yearDiff} years ago`;

  const monthDiff: number = currentMonth - dateMonth - 1;
  if (monthDiff === 1) return "a month ago";
  if (monthDiff === 0) return "this month";
  return `${monthDiff} months ago`;
}

const TimeAgoComponent: React.FC<{ dateString: string }> = ({ dateString }) => {
  const date: Date = new Date(dateString);
  return timeAgo(date);
};

export function ArticleGroup({
  article,
  author,
  profile,
  published,
  url,
}: ArticleGroupProps) {
  return (
    <div className={classes.group}>
      <Link href={url.toString()} className={classes.link}>
        <span className={classes.span}></span>
        <div className={classes.header}>
          <div>
            <h3 className={classes.title}>{article}</h3>
            <p className={classes.author}>By {titleCase(author)}</p>
          </div>
          <div className={classes.hidden}>
            <Image
              src={profile}
              alt={titleCase(author.toString())}
              width={64}
              height={64}
              decoding={"async"}
              loading={"eager"}
              className={classes.image}
            />
          </div>
        </div>
        <div className={classes.publish}>
          <div className={classes.reverse}>
            <dt className={classes.event}>Published</dt>
            <dd className={classes.held}>
              <TimeAgoComponent dateString={published.toString()} />
            </dd>
          </div>
        </div>
      </Link>
    </div>
  );
}
