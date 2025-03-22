import { StaticImageData } from "next/image";
import imesha_dishani from "@/images/blog/profile/imesha-dilshani.avif";

export interface ArticleGroupProps {
    id:number
    article: string;
    type:string;
    discription:string;
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
    //     {
    //     id:2,
    //     article: "Second Temp Ariticle",
    //     author: "Imesha Dilshani",
    //     type:"Tutorials",
    //     discription:"Each word is a vector and similar words are nearby in space. We'll discuss sparse vectors and dense vectors in the context of word embeddings.",
    //     profile: imesha_dishani,
    //     published: "2025-01-01",
    //     url: "/blog/words-as-vectors-sparse-vectors-vs-dense-vectors"
    // },
    {
        id:1,
        article: "Words as Vectors: Sparse Vectors vs Dense Vectors",
        author: "Imesha Dilshani",
        type:"Articles",
        discription:"Each word is a vector and similar words are nearby in space. We'll discuss sparse vectors and dense vectors in the context of word embeddings.",
        profile: imesha_dishani,
        published: "2024-10-01",
        url: "/blog/words-as-vectors-sparse-vectors-vs-dense-vectors"
    },
];