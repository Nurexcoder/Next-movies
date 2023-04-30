import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";
import { FaImdb } from "react-icons/fa";
import { SiRottentomatoes } from "react-icons/si";
import { AiFillPlayCircle } from "react-icons/ai";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Home = ({ movies }) => {
  const [activeImage, setActiveImage] = useState("/images/poster.jpg");

  const refs = movies.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = (item) => {
    if (item?.primaryImage?.url) {
      setActiveImage(
        "https://m.media-amazon.com/images/M/MV5BZmVhZWVmMWMtYmIzYi00MmZjLWJjOTYtNzYwMzExOTY0NmYxXkEyXkFqcGdeQXVyMTMwMjA3Njc1._V1_.jpg"
      );
    } else {
      setActiveImage("/images/poster.jpg");
    }
    // setActiveImage();
    return refs[item.id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  console.log(activeImage);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.imageContainer}>
        <Image src={activeImage} fill />
      </div>
      <div className={styles.body}>
        {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper"> */}
        {movies.map((item) => (
          <div className={styles.movieBody} key={item.id} ref={refs[item.id]}>
            <div className={styles.infoContainer}>
              <h2 className={styles.title}>John Wick 3 : Parabellum</h2>
              <div className={styles.review}>
                <div className={styles.imdb}>
                  <FaImdb
                    color="yellow"
                    fontSize="2rem"
                    className={styles.imdbIcon}
                  />
                  86.0/100
                </div>
                <div className={styles.imdb}>
                  <SiRottentomatoes
                    color="red"
                    fontSize="2rem"
                    className={styles.imdbIcon}
                  />
                  97%
                </div>
              </div>
              <p className={styles.desc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                officia eaque ex ipsum, rem quidem consequuntur illo optio quam,
                repellendus libero facilis voluptatibus officiis. Quaerat
                consequatur blanditiis saepe. Provident saepe repudiandae
                repellat.
              </p>
              <button
                className={styles.watch}
                onClick={() => handleClick(item)}
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
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default Home;
