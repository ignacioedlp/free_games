import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Games } from "../components/index.js";
import axios from "axios";
import { useState } from "react";
import { crearMatriz } from "../utils/functionsUtils";

export default function Home({ games }) {
  const [paginaActual, setPaginaActual] = useState(0);
  const [gamesMatriz, setGamesMatriz] = useState(games);

  const handlePage = (page) => {
    if (page === "next") {
      if (paginaActual < gamesMatriz.length - 1) {
        setPaginaActual(paginaActual + 1);
      }
      else {
        setPaginaActual(0);
      }
    } else {
      if (paginaActual > 0) {
        setPaginaActual(paginaActual - 1);
      }
    }
  };

  return (
    <div className="bg-background">
      <Head>
        <title>Free Games</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="flex flex-col items-center justify-center min-h-screen py-2"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

          }}
        >
          <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
            <h1 className="text-6xl font-bold text-title-white">
              Game Center
            </h1>
            <p className="mt-3 text-2xl text-title-white">
              Play free games online
            </p>
          </main>
        </div>
        <Games data={gamesMatriz[paginaActual]} />
        <div className="flex flex-row justify-center gap-3 p-2 my-10">
          <button
            className="w-1/2 px-4 py-2 text-sm font-bold text-white bg-red-button"
            onClick={() => handlePage("back")}
          >
            Last
          </button>
          <button
            className="w-1/2 px-4 py-2 text-sm font-bold text-white bg-red-button"
            onClick={() => handlePage("next")}
          >
            Next
          </button>
        </div>
      </div>
    </div >
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://www.freetogame.com/api/games`);
  const data = await res.json();
  const games = crearMatriz(data);

  return { props: { games } };
}
