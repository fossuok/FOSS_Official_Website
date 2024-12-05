async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  }
  
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="mt-4">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mt-2">
            <a href={`/blog/${post.id}`} className="text-blue-500">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
  