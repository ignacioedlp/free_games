import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Games } from "../components/index.js";
import axios from "axios";
import { useState } from "react";
import { crearMatriz } from "../utils/functionsUtils";
import { Pagination, Grid, Container, Col } from "@nextui-org/react";

export default function Home({ games }) {
  const [paginaActual, setPaginaActual] = useState(0);
  const [gamesMatriz, setGamesMatriz] = useState(games);

  const handlePage = (page) => {
    setPaginaActual(page - 1);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container>
          <Grid.Container gap={2} justify="center">
            <Games data={gamesMatriz[paginaActual]} />
            <Grid xs={12}>
              <Pagination
                total={gamesMatriz.length}
                initialPage={0}
                loop
                color="success"
                onChange={(page) => handlePage(page)}
              />
            </Grid>
          </Grid.Container>
        </Container>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://www.freetogame.com/api/games`);
  const data = await res.json();
  const games = crearMatriz(data);

  return { props: { games } };
}
