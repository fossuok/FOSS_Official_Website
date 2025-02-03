import { Container, Group } from "@mantine/core";
import classes from "./page.module.css";
import { ArticleGroup } from "./ArticleGroup";
import { data } from "@/data/ArticleGroup";
import GradientBack from "@/components/Gradient/GradientBack";

export const metadata = {
  title: "Blog | FOSSUOK",
};

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <GradientBack />
      <Container size={900}>
        <div className={classes.inner}>
          <h1 className={classes.title}>Discover Our Latest Articles</h1>
          <Group className={classes.controls}>
            <p className={classes.description}>
              Stay ahead of the curve with our freshest insights and updates.
              Dive into our newest article to uncover what's trending in the
              tech world.
            </p>
          </Group>
        </div>
      </Container>
      <Container size={1200}>
        <section className={classes.inner}>
          <div className={classes.grid}>
            {data.map((article, index) => (
              <div key={article.id}>
                <ArticleGroup
                  key={article.id} // Use a unique identifier here
                  id={article.id}
                  article={article.article}
                  author={article.author}
                  type={article.type}
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
