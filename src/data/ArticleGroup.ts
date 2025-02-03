import { StaticImageData } from "next/image";
import imesha_dishani from "@/images/blog/profile/imesha-dilshani.avif";

export interface ArticleGroupProps {
    id:number
    article: String;
    author: String;
    profile: string | StaticImageData;
    published: String;
    url: String;
}

export const data: ArticleGroupProps[] = [
    {
        id:1,
        article: "Words as Vectors: Sparse Vectors vs Dense Vectors",
        author: "Imesha Dilshani",
        profile: imesha_dishani,
        published: "2024-10-01",
        url: "/blog/words-as-vectors-sparse-vectors-vs-dense-vectors"
    },
    {
        id:2,
        article: "Second Temp Ariticle",
        author: "Imesha Dilshani",
        profile: imesha_dishani,
        published: "2025-01-01",
        url: "/blog/Second-Temp-Ariticle"
    },
    {
        id:3,
        article: "Second Temp Ariticle",
        author: "Imesha Dilshani",
        profile: imesha_dishani,
        published: "2025-02-01",
        url: "/blog/Second-Temp-Ariticle"
    },
];