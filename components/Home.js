import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";
import { FaImdb } from "react-icons/fa";
import { SiRottentomatoes } from "react-icons/si";
import { BiUpvote } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { AiFillPlayCircle } from "react-icons/ai";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const Home = ({ movies }) => {
  const [activeImage, setActiveImage] = useState("/images/poster.jpg");
  const [selectedItem, setSelectedItem] = useState(0);

  console.log(activeImage);

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.body}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={300}
          centerMode={false}
          className={styles.sliderContainer}
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={true}
          renderButtonGroupOutside={true}
          renderDotsOutside={true}
          afterChange={(previousSlide, { currentSlide, onMove }) =>
            console.log(currentSlide)
          }
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          // sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {movies?.map((item) => (
            <div className={styles.movieBody} key={item.id}>
              <div className={styles.imageContainer}>
                <Image src={item.poster_path} alt={item.title} fill />
              </div>
              <div className={styles.infoContainer}>
                <h2 className={styles.title}>{item.original_title}</h2>
                <div className={styles.review}>
                  <div className={styles.imdb}>
                    <BiUpvote
                      color="yellow"
                      fontSize="2rem"
                      className={styles.imdbIcon}
                    />
                    {item.popularity}
                  </div>
                  <div className={styles.imdb}>
                    <FcLike
                      color="red"
                      fontSize="2rem"
                      className={styles.imdbIcon}
                    />
                    {item.vote_average}
                  </div>
                </div>
                <p className={styles.desc}>{item.overview}</p>
                <button
                  className={styles.watch}
                  onClick={() =>
                    (window.location.href =
                      "https://www.youtube.com/watch?v=qEVUtrk8_B4")
                  }
                >
                  <AiFillPlayCircle
                    fontSize="1.3rem"
                    style={{
                      marginRight: "5px",
                    }}
                  />{" "}
                  WATCH TRAILER
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
