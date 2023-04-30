import Home from "@/components/Home";
import Head from "next/head";
import React from "react";

const HomePage = ({movies}) => {
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
      <Home movies={movies}/>
    </>
  );
};

export default HomePage;
export async function getStaticProps() {
  const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '46147f2ce6msh26e227a86602b00p1b5daejsnfc6c6118b897',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  

  const response = await fetch(url, options);
  const data = await response.json();
  // console.log(data);
  return {
    props: {
      movies: data.results,
    },
  };
  // console.log(result);
}
