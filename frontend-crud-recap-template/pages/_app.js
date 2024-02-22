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

  return (
    <>
      <Nav />
      <main>
        <Component fruits={fruits} getFruit={getFruit} {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
