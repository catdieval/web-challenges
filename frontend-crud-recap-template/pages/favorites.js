import Link from "next/link";

export default function FavoritesPage({ fruits }) {
  const favoriteFruits = fruits.filter(({ isFavorite }) => isFavorite);

  return (
    <>
      <h1>Favorite Albums</h1>
      {!favoriteFruits ? (
        <p>No favorite fruits yet</p>
      ) : (
        <ul>
          {favoriteFruits.map(({ id, fruit }) => (
            <li key={id}>
              <Link href={`/fruits/${id}`}>{fruit}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
