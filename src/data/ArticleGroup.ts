import { StaticImageData } from "next/image";
import imesha_dishani from "@/images/blog/profile/imesha-dilshani.avif";

export interface ArticleGroupProps {
    article: String;
    author: String;
    profile: string | StaticImageData;
    published: String;
    url: String;
}

export const data: ArticleGroupProps[] = [
    {
        article: "Words as Vectors: Sparse Vectors vs Dense Vectors",
        author: "Imesha Dilshani",
        profile: imesha_dishani,
        published: "2025-01-01",
        url: "/blog/words-as-vectors-sparse-vectors-vs-dense-vectors"
    },
];