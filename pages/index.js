import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Link href="/users">
        <a>Users</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  );
}
