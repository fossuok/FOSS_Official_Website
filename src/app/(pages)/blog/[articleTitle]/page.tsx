import { notFound } from "next/navigation";
import { Container } from "@mantine/core";
import articleIndex from "@/content/blogs/index";
import { TYPE } from "@/data/ArticleProps";
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

// Define the articles list
const articles = articleIndex;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) {
  const { articleTitle } = await params;

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
  const { articleTitle } = await params;

  const article = articles.find((article) => article.id === articleTitle);

  if (!article) {
    return notFound();
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
              <h1 className={classes.title}>{article.header.title}</h1>
              <p className={classes.description}>
                {article.header.description}
              </p>
              <div className={classes.details}>
                <div className={classes.tags}>
                  {article.header.tags.map((tag) => (
                    <span key={tag} className={classes.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={classes.shares}>
                  {article.header.links.map((link) => (
                    <Link key={link} href={link} className={classes.share}>
                      {link.includes("facebook") ? (
                        <FacebookIcon />
                      ) : link.includes("twitter") ? (
                        <TwitterIcon />
                      ) : link.includes("linkedin") ? (
                        <LinkedInIcon />
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main id="main" className={classes.main}>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.thumbnail_wrapper}>
              <Image
                src={article.thumbnail.image || default_thumbnail}
                alt={String(article.thumbnail.alt) || ""}
                className={classes.thumbnail}
              />
              <div className={classes.content}>
                {article.content.map((content, key) => (
                  <ContentRenderer key={key} content={content} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <AboutAuthor
          author={article.about.author}
          profile={article.about.profile || default_profile}
          description={article.about.description}
          links={article.about.links}
        />
      </main>
    </Container>
  );
}

// Utility Component to Render Content Types
function ContentRenderer({ content }: { content: any }) {
  switch (content.type) {
    case TYPE.HEADING:
      return <Heading2 data={content.data} type={content.type} />;
    case TYPE.HEADING_NORMAL:
      return <Heading3 data={content.data} type={content.type} />;
    case TYPE.QUOTE:
      return <BlockQuote data={content.data} type={content.type} />;
    case TYPE.PARAGRAPH:
      return <Paragrph data={content.data} type={content.type} />;
    case TYPE.EXPLANOTORY:
      return <Explonotory data={content.data} type={content.type} />;
    case TYPE.ORDER_LIST:
      return <OrderList data={content.data} type={content.type} />;
    default:
      return null;
  }
}

// Placeholder components for missing types
function UnorderedList({ data }: { data: string[] }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ImageComponent({ data }: { data: string }) {
  return <Image src={data} alt="Article Image" width={600} height={400} />;
}

// Social Media Icons
function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ width: "1rem", height: "1rem" }}
    >
      <title>Facebook</title>
      <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"></path>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ width: "1rem", height: "1rem" }}
    >
      <title>Twitter</title>
      <path d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"></path>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ width: "1rem", height: "1rem" }}
    >
      <title>LinkedIn</title>
      <path d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z"></path>
    </svg>
  );
}
