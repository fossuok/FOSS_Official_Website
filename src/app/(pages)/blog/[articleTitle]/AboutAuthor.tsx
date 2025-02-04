import { About } from "@/data/ArticleProps";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export function AboutAuthor({
  author,
  profile,
  description,
  links,
}: Readonly<About>) {
  return (
    <section className={classes.about_section}>
      <div>
        <Image
          src={profile}
          alt={`${author}'s profile`}
          className={classes.author_image}
        />
        <div>
          <h1 className={classes.about_author}>About&nbsp;{author}</h1>
          <p className={classes.about_desc}>{description}</p>
          <div>
            <ul className={classes.about_links}>
              {Array.isArray(links) ? (
                links.map((link) => (
                  <li key={link}>
                    <Link href={link} className={classes.about_link}>
                      {link.includes("facebook") ? (
                        <span>facebook</span>
                      ) : link.includes("twitter") ? (
                        <span>twitter</span>
                      ) : link.includes("linkedin") ? (
                        <span>linkedin</span>
                      ) : null}
                    </Link>
                  </li>
                ))
              ) : (
                <p>Data not found!</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
