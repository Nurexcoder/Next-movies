import React from "react";
import styles from "../styles/trending.module.css";
import { AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import "./styles.css";
const Trendings = ({ trendingMovies }) => {
  let movies = [1, 2, 3, 4];
  // console.log(trendingMovies);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Trending Movies</h3>
        <button className={styles.seeAll}>
          See All
          <AiOutlineRight
            fontSize="1rem"
            style={{
              marginRight: "5px",
            }}
          />
        </button>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
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
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
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
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {trendingMovies?.map((movie) => (
        <Card key={movie} movie={movie} isMovie={true} />
        ))}
      </Carousel>
    </div>
  );
};

export default Trendings;
