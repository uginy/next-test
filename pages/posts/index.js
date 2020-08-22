import Link from "next/link";

export default function PostsPage({ posts }) {
  return (
    <div>
      Posts:
      {posts.map((el, i) => (
        <div key={i}>
          <Link href={`/posts/post/[id]`} as={`/posts/post/${el.id}`}>
            <a>{el.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts
    }
  };
}
