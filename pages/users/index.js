import Link from "next/link";

export default function UsersPage({ users }) {
  return (
    <div>
      USERS:
      {users.map((el, i) => (
        <div key={i}>
          <Link href={`/users/user/[id]`} as={`/users/user/${el.id}`}>
            <a>{el.name}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users
    }
  };
}
