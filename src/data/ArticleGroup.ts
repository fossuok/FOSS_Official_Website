import { StaticImageData } from "next/image";
const imgUrl = process.env.NEXT_PUBLIC_CDN;
const imesha_dishani = `${imgUrl}/images/images/blog/profile/imesha-dilshani.avif`;
const sahan_heshan = `${imgUrl}/images/images/blog/profile/Sahan_Heshan.webp`;
export interface ArticleGroupProps {
  id: number;
  article: string;
  type: string;
  discription: string;
  author: string;
  profile: string | StaticImageData;
  published: string;
  url: string;
}
// ALWAYS add latest articles on top

// News – Updates about your society, events, and announcements.
// Articles – In-depth discussions, guides, and opinion pieces.
// Tutorials – Step-by-step guides
// Projects - Showcases

export const data: ArticleGroupProps[] = [
  // {
  //     id:3,
  //     article: "Third Temp Ariticle",
  //     author: "Imesha Dilshani",
  //     type:"News",
  //     discription:"Each word is a vector and similar words are nearby in space. We'll discuss sparse vectors and dense vectors in the context of word embeddings.",
  //     profile: imesha_dishani,
  //     published: "2025-02-01",
  //     url: "/blog/words-as-vectors-sparse-vectors-vs-dense-vectors"
  // },
  {
    id: 2,
    article: "Open Dev Summit 25 Series - Conclusion",
    author: "Sahan Heshan",
    type: "News",
    discription:
      "The Open Dev Summit Consisted 6 pre- summit workshops and the grand summit which brought the latest tech knowledge to our student with the help from industry volunteers.",
    profile: sahan_heshan,
    published: "2025-05-29",
    url: "/blog/open-dev-summit-25-series-conclusion",
  },
  {
    id: 1,
    article: "Words as Vectors: Sparse Vectors vs Dense Vectors",
    author: "Imesha Dilshani",
    type: "Articles",
    discription:
      "Each word is a vector and similar words are nearby in space. We'll discuss sparse vectors and dense vectors in the context of word embeddings.",
    profile: imesha_dishani,
    published: "2024-10-01",
    url: "/blog/words-as-vectors-sparse-vectors-vs-dense-vectors",
  },
];
