import React from "react";
import styles from "../styles/MovieDetails.module.css";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Tooltip } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";
import { BiPlay } from "react-icons/bi";
const MovieDetails = ({ movie }) => {
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
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
      }}
    >
      <div className={styles.containerInside}>
        <div className={styles.left}>
          <Image
            src={
              "https://www.themoviedb.org/t/p/w300_and_h450_face/" +
              movie.poster_path
            }
            alt={movie.title}
            width={300}
            height={450}
            className={styles.img}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.titleBox}>
            <h1 className={styles.title}>
              {movie.title || movie.original_name}
            <span className={styles.year}> ({date.getFullYear()})</span>
            </h1>

          </div>
          <div className={styles.generalDetails}>
            <h3 className={styles.releaseDate}>
              {month[date.getMonth()] +
                " " +
                date.getDate() +
                ", " +
                date.getFullYear()}
            </h3>
            <div className={styles.productionCom}>
              (
              {movie.production_countries.map((com, i) =>
                i < movie.production_countries.length - 1
                  ? com.iso_3166_1 + ", "
                  : com.iso_3166_1
              )}
              )
            </div>
            •
            <div className={styles.genre}>
              (
              {movie.genres.map((gen, i) =>
                i < movie.genres.length - 1 ? gen.name + ", " : gen.name
              )}
              )
            </div>
            {movie.runtime ? (
              <>
                •{" "}
                <div className={styles.runTime}>
                  {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.userBar}>
            <Tooltip title="User Score">
              <div className={styles.popularityDiv}>
                <div className={styles.progress}>
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
                      textSize: "30px",
                    })}
                  />
                </div>
                <h3 className={styles.userScore}>User Score</h3>
              </div>
            </Tooltip>
            <button className={styles.play}>
              <BiPlay />
              Play Trailer
            </button>
          </div>
          <div className={styles.movieOverView}>
            <h3 className={styles.overview}>Overview</h3>
            <p className={styles.details}>{movie.overview}</p>
          </div>
          {movie.revenue ? (
            
              <div className={styles.incomeDiv}>
                <div className={styles.budget}>
                  <h3 className={styles.overview}>Budget</h3>
                  <p className={styles.details}>
                    {"$ " +
                      movie?.budget
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
                <div className={styles.budget}>
                  <h3 className={styles.overview}>Revenue</h3>
                  <p className={styles.details}>
                    $
                    {" " +
                      movie?.revenue
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
              </div>
            
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
