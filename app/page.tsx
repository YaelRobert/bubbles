async function getData() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
  title,
    shortDescription,
    "currentslug": slug.current
  }`;
}

export default function Home() {
  return (
    <div>
      <h1>Hello from the index page!</h1>
    </div>
  );
}
