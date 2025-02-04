import { Content } from "@/data/ArticleProps";
import classes from "./styles.module.css";

export function Heading2({ data, type }: Readonly<Content>) {
  return <h2 className={classes.heading2}>{data}</h2>;
}
