import { Container } from "@mantine/core";
import classes from "./page.module.css";
import { ArticleGroup } from "./ArticleGroup";
import { data } from "../../../data/ArticleGroup";

export const metadata = {
  title: "Blog | FOSSUOK",
};

export default function Home() {
  return (
    <div>
      <Container size={1280}>
        <div className={classes.main}>
          <div className={classes.wrapper}>
            <h1 className={classes.title}>Discover Our Latest Articles</h1>
            <p className={classes.description}>
              Stay ahead of the curve with our freshest insights and updates.
              Dive into our newest article to uncover what's trending in the
              tech world.
            </p>
          </div>
        </div>
        <section className={classes.section}>
          <div className={classes.grid}>
            {data.map((article, index) => (
              <div key={article.id}>
                <ArticleGroup
                  key={article.id} // Use a unique identifier here
                  id={article.id}
                  article={article.article}
                  author={article.author}
                  profile={article.profile}
                  published={article.published}
                  url={article.url}
                />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
