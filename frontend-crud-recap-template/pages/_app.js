import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  // store the initial data in the state
  const [fruits, setFruits] = useState(data);

  function getFruit(id) {
    return fruits.find((x) => x.id == id);
  }

  function toggleFavorite(id) {
    const favoriteFruits = fruits.map((item) => {
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item;
    });
    setFruits(favoriteFruits);
  }

  return (
    <>
      <Nav />
      <main>
        <Component
          fruits={fruits}
          getFruit={getFruit}
          toggleFavorite={toggleFavorite}
          {...pageProps}
        />
      </main>
      <Footer />
    </>
  );
}
