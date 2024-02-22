// name your list resource in the page props
// and map over it to render it
import Link from "next/link";

export default function IndexPage({ fruits }) {
  return (
    <>
      <h1>Frontend Recap</h1>
      <p>List of fruits</p>
      <ul>
        {fruits.map(({ id, fruit }) => (
          <li key={id}>
            <Link href={`/fruits/${id}`}>{fruit}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
