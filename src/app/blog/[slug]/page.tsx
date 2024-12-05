import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`);
  const posts = await res.json();

  const post = posts[0];

  if (!post) {
    notFound(); // Redirect to the 404 page
    return {
        title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.body.slice(0, 150),
  };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = params;
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`);
    const posts = await res.json();
    const post = posts[0];
  
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-4">{post.body}</p>
      </div>
    );
  }
