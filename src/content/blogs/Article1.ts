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
import { ArticleProps, TYPE } from "@/data/ArticleProps";
import thumbnail_1 from "@/images/blog/thumbnail/article-1-thumbnail.webp";
import imesha_profile from "@/images/blog/profile/imesha-dilshani.avif";

export const Article1: ArticleProps = {
  id: "words-as-vectors-sparse-vectors-vs-dense-vectors",
  header: {
    title: "Words as Vectors: Sparse Vectors vs Dense Vectors",
    description:
      "Each word is a vector and similar words are nearby in space. We'll discuss sparse vectors and dense vectors in the context of word embeddings.",
    tags: [
      "NLP",
      "Word Embeddings",
      "Word Vectors",
      "Sparse Vectors",
      "Dense Vectors",
    ],
    links: [
      "https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffossuok.org%2Fblog%2Fwords-vectors-sparse-vectors-dense-vectors",
      "https://twitter.com/intent/tweet?url=https%3A%2F%2Ffossuok.org%2Fblog%2Fwords-vectors-sparse-vectors-dense-vectors&text=Words as Vectors: Sparse Vectors vs Dense Vectors",
      "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Ffossuok.org%2Fblog%2Fwords-vectors-sparse-vectors-dense-vectors",
    ],
  },
  thumbnail: {
    image: thumbnail_1,
    alt: "Thumbnail of word vectors.",
  },
  content: [
    {
      data: "Sparse Vectors vs. Dense Vectors",
      type: TYPE.HEADING,
    },
    {
      data: "We’ll build a new model of meaning focusing on similarity.",
      type: TYPE.PARAGRAPH,
    },
    {
      data: 'Each word is a vector. Similar words are "nearby in space."',
      type: TYPE.QUOTE,
    },
    {
      data: "Dense Vectors",
      type: TYPE.HEADING,
    },
    {
      data: "The world of data is vast and complex. To effectively analyze and understand this information, we need efficient and powerful techniques for representing it. Dense vectors offer a compelling solution by encoding data points as high-dimensional vectors, capturing rich semantic meaning in a way that facilitates efficient learning and analysis. This note provides a comprehensive overview of dense vectors, exploring their key characteristics, methods of creation, and why dense vectors are used in natural language processing (NLP) with a focus on neural language models.",
      type: TYPE.PARAGRAPH,
    },
    {
      data: "From sparse to dense vectors",
      type: TYPE.HEADING,
    },
    {
      data: "The vectors generated from the word-word occurrence matrix are both lengthy (vocabulary size) and sparse (most are 0s). As an alternative, we would prefer to describe words as dense (real-valued) and short (50– 300 dimensional) vectors. This is the foundation of all current NLP systems.",
      type: TYPE.QUOTE,
    },
    {
      data: "Why dense vectors?",
      type: TYPE.HEADING,
    },
    {
      data: [
        [
          "Feature Friendliness:",
          "Dense vectors are easily digestible by machine learning models. They readily fit into existing algorithms and require minimal data manipulation.",
        ],
        [
          "Beyond the Count:",
          "Dense vectors can go beyond simple feature co-occurrence counts. They capture subtle relationships and higher-order interactions between features, leading to potentially better generalization.",
        ],
        [
          "Bridging the Semantic Gap:",
          "Dense vectors can bridge the gap between distinct but semantically related features. For instance, “car” and “automobile” may be separate dimensions, but a dense vector can capture their shared meaning.",
        ],
        [
          "Proven Performance:",
          "In real-world applications, dense vectors often outperform sparse counterparts. They can lead to more accurate predictions and robust models.",
        ],
      ],
      type: TYPE.EXPLANOTORY,
    },
    {
      data: "Sparse Vectors vs. Dense Vectors",
      type: TYPE.HEADING,
    },
    {
      data: "Sparse vectors and dense vectors are two types of data representations used in various fields, including machine learning, natural language processing, and data analysis. The main difference between them lies in how they store and represent information.",
      type: TYPE.PARAGRAPH,
    },
    {
      data: "Dense Vectors",
      type: TYPE.HEADING,
    },
    {
      data: [
        "Definition: Dense vectors are arrays that store each element in a contiguous block of memory. In the context of machine learning, a dense vector typically contains a value for every dimension, and most of these values are non-zero.",
        "Storage: Requires memory proportional to the number of dimensions, even if many of the values are zero. Consumes more memory compared to sparse vectors, especially when dealing with high-dimensional data.",
        "Use Cases: Dense vectors are often used when the majority of dimensions contain meaningful information, and memory efficiency is not a primary concern.",
      ],
      type: TYPE.ORDER_LIST,
    },
    {
      data: "Sparse Vectors",
      type: TYPE.HEADING,
    },
    {
      data: [
        "Definition: Sparse vectors store only non-zero values and their corresponding indices. Most of the elements are assumed to be zero, and only the non-zero values are explicitly represented.",
        "Storage: Requires less memory compared to dense vectors, especially when dealing with high dimensional data where most elements are zero. Well-suited for high-dimensional data with sparsity.",
        "Use Cases: Sparse vectors are commonly used when dealing with high-dimensional data, such as text data represented as bag-of-words or term frequency vectors, where most terms are absent in any given document.",
      ],
      type: TYPE.ORDER_LIST,
    },
    {
      data: "Understanding Simply difference between Sparse Vectors and Dense Vectors",
      type: TYPE.HEADING_NORMAL,
    },
    {
      data: "Imagine a treasure map. Dense vectors are like detailed blueprints, marking every inch of the terrain. Sparse vectors are like riddles, hinting at hidden gems with cryptic clues.",
      type: TYPE.PARAGRAPH,
    },
    {
      data: [["Dense:", ""]],
      type: TYPE.EXPLANOTORY,
    },
    {
      data: "Full of details: Store all values, even zeroes. Like meticulously noting every rock on the map. Memory hungry: Can be inefficient for sparse data, like empty stretches of ocean. ML-friendly: Easy for algorithms to understand and use. Like having a clear path to follow.",
      type: TYPE.QUOTE,
    },
    {
      data: [["Sparse:", ""]],
      type: TYPE.EXPLANOTORY,
    },
    {
      data: "Secret keepers: Store only non-zero values, saving space. Like marking only, the buried treasure. Memory efficient: Ideal for data with lots of “nothingness” (think deserts on a map). Trickier for ML: Requires specialized algorithms to decipher the clues. Like navigating by the stars.",
      type: TYPE.QUOTE,
    },
    {
      data: "Choosing the right weapon:",
      type: TYPE.HEADING,
    },
    {
      data: [
        [
          "Dense for detailed data:",
          "Images, numerical analysis, where every bit matters.",
        ],
        [
          "Sparse for hidden treasures:",
          "Text, natural language, where zeroes dominate.",
        ],
      ],
      type: TYPE.EXPLANOTORY,
    },
  ],
  about: {
    author: "Imesha Disahani",
    profile: imesha_profile,
    description:
      "Imesha Dilshani is a Computer Science undergraduate at the University of Kelaniya. She is a passionate tech enthusiast who loves to explore new technologies. She is one of the founding member of the FOSS Community UOK.",
    links: [
      "https://www.linkedin.com/in/imesha-dilshani-61862422b/",
      "https://twitter.com/ImeshaDilshani",
      "https://www.facebook.com/imesha.dilshani/",
    ],
  },
};
