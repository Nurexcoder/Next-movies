import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tooltip } from "@mui/material";
import Link from "next/link";
const Card = ({ movie, isMovie, isSearch }) => {
  const [src, setSrc] = useState(
    "https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path
  );
  const date = new Date(movie.release_date || movie.first_air_date);
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log(isMovie);
  const imageLoader = ({ src, width, quality }) => {
    return "/images/notFound.png";
  };
  return (
    <div className={isSearch ? styles.searchBox : styles.card}>
      <Link href={isMovie ? "/movies/" + movie.id : "/series/" + movie.id}>
        <div className={styles.imageContainer}>
          <Image
            fill
            className={styles.img}
            // loader={imageLoader}
            blurDataURL="/images/loading.png"
            placeholder="blur"
            src={src}
            onError={() => setSrc("/images/notFound.png")}
            alt={movie.title}
          />
        </div>
        <div className={styles.movieDetails}>
          <Tooltip title="Voter Count">
            <div className={styles.popularityDiv}>
              <CircularProgressbar
                className={styles.circularDiv}
                value={Math.round((movie.vote_average / 10) * 100)}
                text={`${Math.round((movie.vote_average / 10) * 100)}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#081c22",
                  textColor: "#fff",
                  pathColor: "#21d07a",
                  trailColor: "#204529",
                  textSize: "24px",
                })}
              />
            </div>
          </Tooltip>
          <Tooltip title="Movie Name">
            <h1 className={styles.title}>{movie.title || movie.name}</h1>
          </Tooltip>
          {date && (
            <Tooltip title="Release Date">
              <h3 className={styles.releaseDate}>
                {month[date.getMonth()] +
                  " " +
                  date.getDate() +
                  ", " +
                  date.getFullYear()}
              </h3>
            </Tooltip>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
