import { Content } from "@/data/ArticleData";
import classes from "./styles.module.css";

export function BlockQuote({ data, type }: Content) {
  return (
    <blockquote>
      <p className={classes.quote}>{data}</p>
    </blockquote>
  );
}
