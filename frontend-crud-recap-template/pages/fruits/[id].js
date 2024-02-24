import { useRouter } from "next/router";

export default function FruitPage({ getFruit, toggleFavorite }) {
  const router = useRouter();
  const fruititem = getFruit(router.query.id);

  if (!fruititem) {
    return "Loading...";
  }

  /*function handleClick() {
    toggleFavorite(router.query.id);
  } */

  return (
    <>
      <h1>Detail page</h1>
      <p>
        {fruititem.fruit} - {fruititem.size} - {fruititem.color}
      </p>
      <br></br>
      <button>Add as favorite</button>
    </>
  );
}
