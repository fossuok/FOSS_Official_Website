import { Content } from "@/data/ArticleData";
import classes from "./styles.module.css";

export function Heading3 ({ data, type }: Content) {
    return (
        <h3 className={classes.heading3}>{data}</h3>
    )
};