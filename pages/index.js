import Home from "@/components/Home";
import Head from "next/head";
import React from "react";
import styles from "../styles/HomePage.module.css";
import { movies } from "../data";
import Trendings from "@/components/Trendings";
import { token } from "@/config";
import Populars from "@/components/Popular";
import useSWR from "swr";

const HomePage = ({ trendingMovies }) => {
  const fetcher = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const responsePopular = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      options
    );

    const popularMovies = await responsePopular.json();
    // console.log(popularMovies);
    return popularMovies.results.reverse();
  };
  const { data, error } = useSWR("trending", fetcher);
  // console.log(data)
  return (
    <>
      <Head>
        <title>Movies Tadka</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;700&family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Home movies={movies} />
      <div className={styles.movieContainers}>
        <Trendings trendingMovies={trendingMovies} />
        <Populars popularMovies={data} />
      </div>
    </>
  );
};

export default HomePage;
// export async function getStaticProps() {
//   const url =
//     "https://api.themoviedb.org/3/movie/now_playing?api_key=633c07db9a4d0dd47d168d49a281de64&language=en-US&page=1";

//   const response = await fetch(url);
//   const data = await response.json();
//   let topMovies = [];

//   if (data?.results.length) {
//     topMovies = data.results.filter((movie, i) => {
//       movie.poster_path =
//         "https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path;
//       if (i < 5) return movie;
//     });
//   }
//   console.log(topMovies)
//   return {
//     props: {
//       movies: topMovies,
//     },
//   };
//   // console.log(result);
// }

export async function getServerSideProps() {
  // console.log(token);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );

  // console.log(response);
  const data = await response.json();

  return {
    props: {
      trendingMovies: data.results,
      // popularMovies: dataPopular.results.reverse(),
    },
  };
}
