/**
 *  NOTE: take care about naming conventions if author means author's full name with hyphen
 *       and if thumbnail named as article-(count)-thumbnail.extension to maintain eaziness.
 *
 *  To add new author profile follow this format:
 *      import author_profile from '@/images/blog/profile/author.extension';
 */

/**
 *  To add new article thumbnail follow this format:
 *      import thumbnail_n from '@/images/blog/thumbnail/article-n-thumbnail.extension';
 */
const imgUrl = process.env.NEXT_PUBLIC_CDN;
import { ArticleProps, TYPE } from "@/data/ArticleProps";

const author_name = "Sahan Heshan";

export const Article2: ArticleProps = {
  id: "open-dev-summit-25-series-conclusion",
  header: {
    title: "",
    description:
      "The Open Dev Summit consisted of 6 pre-summit workshops and a grand summit day, bringing cutting-edge tech knowledge to our students and creating new networking opportunities with industry tech leaders.",
    tags: ["ODS25", "FOSS Events"],
    links: [
      "https://www.linkedin.com/posts/fossuok_open-dev-summit-25-was-an-inspiring-day-activity-7333482127482605568-rqXS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElrz7IBpiGXBSt55uuywCDD_7PsOUyv8PA",
    ],
  },
  thumbnail: {
    image: `${imgUrl}/images/images/blog/thumbnail/article_2.webp`,
    alt: "ods25",
  },
  content: [
    {
      data: "Open Dev Summit 25 Series - Conclusion",
      type: TYPE.HEADING,
    },
    {
      data: "The ODS'25 series kicked off on April 26 with our pre-summit events and continued until May 17 with a series of workshops and online sessions, culminating in the grand summit day on May 24.",
      type: TYPE.PARAGRAPH,
    },
    {
      data: [
        [
          "Linux Fundamentals :",
          "A hands on lab session for Linux Command Line, File System & Process Management.",
        ],
        [
          "FOSS Tools for Big Data & AI :",
          "Online Session on Spark, Hadoop, and Airflow.",
        ],
        [
          "Building Modern Web Apps: ",
          "Online Session on .NET & Open Source Tools.",
        ],
        [
          "Mobile Application Development :",
          "Online Session on Micro-Frontend Architecture to Mobile Applications.",
        ],
        [
          "Infrastructure Automation with Terraform :",
          "A live session at the FCT premises, alongside the FCT Open Day event.",
        ],
        [
          "Building Transparent LLM Applications :",
          "A Guide to Monitoring and Observability in a physical session at the FCT.",
        ],
      ],
      type: TYPE.EXPLANOTORY,
    },

    {
      data: "The Summit Day",
      type: TYPE.HEADING,
    },
    {
      data: "The grand summit day was held on 24th May at the University of Kelaniya, where we hosted a series of back-to-back sessions with our industry partners and community partners.",
      type: TYPE.PARAGRAPH,
    },
    {
      data: [
        [
          "Kubernetes 101 - Navigating the World of Containers :",
          "with Nikila Fernando DevOps Engineer at Fortude.",
        ],
        [
          "Modernizing Application Authentication and Authorization using IAM :",
          "with Joy Rathnayake Associate Director/Solutions Architect at WSO2.",
        ],
        [
          "Introduction to Crossplane :",
          "with Buddima Udaranga Lead platform engineer at Codification",
        ],
        [
          "Quality is Everyone's Business - Embracing a QA-First Mindset :",
          "with Asma Muzammil QA Lead at Code94 Labs",
        ],
      ],
      type: TYPE.EXPLANOTORY,
    },
    {
      data: "We would like to thank all our community partners, industry partners, and participants for making this event a success, and special thanks to the team of students who spent months preparing to organize this event 💖.",
      type: TYPE.PARAGRAPH,
    },
    {
      data: "For more info visit our dedicated Summit Page 👆.",
      type: TYPE.PARAGRAPH,
    },
  ],
  about: {
    author: author_name,
    profile: `${imgUrl}/images/images/blog/profile/Sahan_Heshan.webp`,
    description:
      "Sahan is an Undergraduate from the University of Kelaniya who is following a Computer Science degree program. He is currently committed to contributing to the FOSS UoK community.",
    links: ["www.linkedin.com/in/sahan-samarathunga"],
  },
};
