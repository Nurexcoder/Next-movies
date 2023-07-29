import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "@/styles/search.module.css";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import { Pagination, PaginationItem } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const Search = ({ movies }) => {
  const [moviesState, setMoviesState] = useState(movies.results);
  const [count, setCount] = useState(movies.total_pages);

  const router = useRouter();
  const [curQuery, setCurQuery] = useState("");
  const [activePage, setActivePage] = useState(1);
  const getMovies = async (query, pageNo) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.TOKEN,
      },
    };

    let response;
    if (query) {
      if (query == curQuery && pageNo == activePage) return;
      setCurQuery(query);
      setActivePage(pageNo);
      response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${
          pageNo || 1
        }`,
        options
      );
      router.replace({
        query: { ...router.query, q: query },
      });
      console.log(response);
    } else {
      setActivePage(pageNo);
      response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${
          pageNo || 1
        }`,
        options
      );
      router.replace({
        query: { ...router.query, q: query },
      });
    }

    const data = await response.json();
    console.log(data);
    setCount(data.total_pages);
    setMoviesState(data.results || movies.results);
  };
  return (
    <div className={styles.mainContainer}>
      <Navbar getMovies={getMovies} isSearch={true} />
      <div className={styles.body}>
        <div className={styles.movieBody}>
          {moviesState.map((movie) => (
            <Card key={movie.id} movie={movie} isMovie={true} isSearch={true} />
          ))}
        </div>
        <div className={styles.pagination}>
          <Pagination
            count={count}
            color="primary"
            onChange={(e, pageNo) => getMovies(curQuery, pageNo)}
            page={activePage}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: BiArrowFromRight, next: BiArrowFromLeft }}
                {...item}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
export async function getServerSideProps(context) {
  const query = context.query.q;
  console.log(query);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.TOKEN,
    },
  };

  let response;
  if (query) {
    response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
  } else {
    response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
      options
    );
  }
  // console.log(response);
  const data = await response.json();

  return {
    props: {
      movies: data,
      // popularMovies: dataPopular.results.reverse(),
    },
  };
}
