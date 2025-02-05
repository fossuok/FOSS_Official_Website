import { Container, Text, Button, Stack } from "@mantine/core";
import Link from "next/link";
import classes from "./ArticlesHome.module.css";
import { ArticleGroup } from "@/app/(pages)/blog/ArticleGroup";
import { data } from "@/data/ArticleGroup";

export const metadata = {
  title: "Blog | FOSSUOK",
};

export default function ArticlesHome() {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.wrapper} size={1000} pt={100} pb={100}>
        <h1 className={classes.title}>
          Latest{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "violet", to: "grape" }}
            inherit
          >
            Aritcles
          </Text>{" "}
        </h1>
        <Stack>
          <Text className={classes.discription}>
            Here are some of the latest articles from our blog.
          </Text>
          <section>
            <div className={classes.grid}>
              {data.slice(0, 4).map((article, index) => (
                <div key={article.id}>
                  <ArticleGroup
                    key={article.id} // Use a unique identifier here
                    id={article.id}
                    article={article.article}
                    type={article.type}
                    discription={article.discription}
                    author={article.author}
                    profile={article.profile}
                    published={article.published}
                    url={article.url}
                  />
                </div>
              ))}
            </div>
          </section>

          <Link href="/blog" className={classes.link}>
            <Button className={classes.btn} radius="xl" variant="default">
              View Blogs
            </Button>
          </Link>
        </Stack>
      </Container>
    </div>
  );
}
