import { useRouter } from "next/router";

export default function FruitPage({ getFruit }) {
  const router = useRouter();
  const fruititem = getFruit(router.query.id);

  if (!fruititem) {
    return "Loading...";
  }

  return (
    <p>
      {fruititem.fruit} - {fruititem.size} - {fruititem.color}
    </p>
  );
}
