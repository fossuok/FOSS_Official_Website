import { Content } from "@/data/ArticleData";
import classes from "./styles.module.css";

export function Explonotory({ data, type }: Content) {
    return (
        <div style={{padding: "0"}}>
            { Array.isArray(data) && Array.isArray(data[0]) ? (
                data.map((d, index) => (
                    <p className={classes.para}>
                        <strong className={classes.strong}>{d[0]}</strong>&nbsp;{d[1]}
                    </p>
                ))
            ): (
                <p>Data not found!</p>
            )}
        </div>
    )
};