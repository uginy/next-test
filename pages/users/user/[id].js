export default function UserPage({ user }) {
  return (
    <>
      <div>{user.id}</div>
      <div>{user.username}</div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      user
    }
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = users.map((el) => ({
    params: { id: el.id.toString() }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
