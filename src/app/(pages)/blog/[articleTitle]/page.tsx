import { notFound } from "next/navigation"; // Import to handle missing articles
import { Container } from "@mantine/core";
import { articles } from "@/data/ArticleData";
import { TYPE } from "@/data/ArticleData";
import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

import default_profile from "@/images/blog/profile/imesha-dilshani.avif";
import default_thumbnail from "@/images/blog/thumbnail/article-1-thumbnail.webp";
import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { BlockQuote } from "./BlockQuote";
import { Paragrph } from "./Paragraph";
import { Explonotory } from "./Explonotory";
import { OrderList } from "./OrderList";
import { AboutAuthor } from "./AboutAuthor";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) {
  // Await params if necessary
  const { articleTitle } = await params; // Ensures params is ready before accessing

  const article = articles.find((article) => article.id === articleTitle);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "This article does not exist.",
    };
  }

  return {
    title: article.header.title,
    description: article.header.description,
  };
}
export default async function Home({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) {
  const { articleTitle } = await params; // Await the params to ensure they are resolved

  const article = articles.find((article) => article.id === articleTitle);

  if (!article) {
    return notFound(); // Redirects to Next.js 404 page
  }

  return (
    <Container size={1200}>
      <header>
        <div style={{ gap: "1rem" }}>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div className={classes.header}>
              <Link href="/blog" className={classes.link}>
                👈 View all Blog Posts
              </Link>
              <h1 className={classes.title}>{article?.header.title}</h1>
              <p className={classes.description}>
                {article?.header.description}
              </p>
              <div className={classes.details}>
                <div className={classes.tags}>
                  {article?.header.tags.map((tag, index) => (
                    <span key={index} className={classes.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={classes.shares}>
                  {article?.header.links.map((link, index) =>
                    link.includes("facebook") ? (
                      <Link key={index} href={link} className={classes.share}>
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          style={{ width: "1rem", height: "1rem" }}
                          data-astro-cid-7jjqptxk=""
                        >
                          <title>Facebook</title>
                          <path
                            d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"
                            data-astro-cid-7jjqptxk=""
                          ></path>
                        </svg>
                      </Link>
                    ) : link.includes("twitter") ? (
                      <Link key={index} href={link} className={classes.share}>
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          style={{ width: "1rem", height: "1rem" }}
                          data-astro-cid-7jjqptxk=""
                        >
                          <title>Twitter</title>
                          <path
                            d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"
                            data-astro-cid-7jjqptxk=""
                          ></path>
                        </svg>
                      </Link>
                    ) : link.includes("linkedin") ? (
                      <Link key={index} href={link} className={classes.share}>
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          style={{ width: "1rem", height: "1rem" }}
                          data-astro-cid-7jjqptxk=""
                        >
                          <title>Linkedin</title>
                          <path
                            d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z"
                            data-astro-cid-7jjqptxk=""
                          ></path>
                        </svg>
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main id="main" className={classes.main}>
        <div>
          <main>
            <div className={classes.wrapper}>
              <div className={classes.container}>
                <div className={classes.thumnail_wrapper}>
                  <Image
                    src={article?.thumbnail.image || default_thumbnail}
                    alt={article?.thumbnail.alt.toString() || ""}
                    className={classes.thumbnail}
                  />
                  <div className={classes.content}>
                    {article?.content.map((content, key) =>
                      content.type == TYPE.HEADING ? (
                        <Heading2 data={content.data} type={content.type} />
                      ) : content.type == TYPE.HEADING_NORMAL ? (
                        <Heading3 data={content.data} type={content.type} />
                      ) : content.type == TYPE.QUOTE ? (
                        <BlockQuote data={content.data} type={content.type} />
                      ) : content.type == TYPE.PARAGRAPH ? (
                        <Paragrph data={content.data} type={content.type} />
                      ) : content.type == TYPE.EXPLANOTORY ? (
                        <Explonotory data={content.data} type={content.type} />
                      ) : content.type == TYPE.ORDER_LIST ? (
                        <OrderList data={content.data} type={content.type} />
                      ) : content.type == TYPE.UNORDER_LIST ? (
                        // TODO: Implement a unordered list component
                        <p></p>
                      ) : content.type == TYPE.IMAGE ? (
                        // TODO: Implement a image component
                        <p></p>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
            <AboutAuthor
              author={article?.about.author || "N/A"}
              profile={article?.about.profile || default_profile}
              description={article?.about.description || "N/A"}
              links={article?.about.links || []}
            />
          </main>
        </div>
      </main>
    </Container>
  );
}
