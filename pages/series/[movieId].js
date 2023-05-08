import MovieDetails from "@/components/MovieDetails";
import Navbar from "@/components/Navbar";
import React from "react";

const Movie = ({ movie, bgImage }) => {
  console.log(movie);
  return (
    <div>
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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzNjMDdkYjlhNGQwZGQ0N2QxNjhkNDlhMjgxZGU2NCIsInN1YiI6IjY0NGU1ZGZlYTZjMTA0MTM2NzY3NzEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uzg775JOdNAjwSFX5p7O97hsR_swBAXshwj_OA5YlY",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/tv/" + movieId + "?language=en-US",
    options
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      movie: data,
    },
  };
}
