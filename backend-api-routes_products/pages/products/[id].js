import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DisplaySingleProduct() {
  const router = useRouter();
  const { data, isLoading } = useSWR(
    router.query.id ? `/api/users/${router.query.id}` : null,
    fetcher
  );

  if (!data || isLoading) {
    return "Loading...";
  }

  const { name, description, price, currency, category } = data;
  return (
    <>
      <p>
        {name} {description} {price} {currency} {category}
      </p>
    </>
  );
}
