import MovieDetails from "@/components/MovieDetails";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/styles/MovieDetails.module.css";

const Movie = ({ movie, bgImage }) => {
  console.log(movie);
  return (
    <div className={styles.mainContainer}>
      <Navbar bgColor="blue" />
      <MovieDetails movie={movie} />
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  const movieId = context.params.movieId;
  //   console.log(movieId);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.TOKEN,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
    options
  );
  const data = await response.json();

  return {
    props: {
      movie: data,
    },
  };
}
