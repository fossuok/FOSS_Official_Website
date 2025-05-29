import { StaticImageData } from "next/image";

export const enum TYPE {
  // NOTE: if any new type of content required update
  // here first with associated token
  HEADING = "heading",
  HEADING_NORMAL = "heading-normal",
  PARAGRAPH = "paragraph",
  QUOTE = "quote",
  ORDER_LIST = "order-list",
  UNORDER_LIST = "unorder-list",
  EXPLANOTORY = "explanotory",
  IMAGE = "image",
}

export interface Content {
  data: String | String[] | String[][];
  type: TYPE;
}

export interface About {
  author: string;
  profile: string | StaticImageData;
  description: string;
  links: string[];
}

export interface Thumbnail {
  image: string | StaticImageData;
  alt: String;
}

export interface ArticleProps {
  // NOTE: if article require more properties in future
  // first update here and set as nullable value for them
  // to avoid errors on previous articles.
  // ex: email?: string -> '?' denotes property as nullable
  id: string;
  header: {
    title: string;
    description: string;
    tags: string[];
    links: string[];
  };
  thumbnail: Thumbnail;
  content: Content[];
  about: About;
}
