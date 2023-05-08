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
const Home = ({ movies }) => {
  const [activeImage, setActiveImage] = useState("/images/poster.jpg");
  const [selectedItem, setSelectedItem] = useState(0);
  const refs = movies.reduce((acc, value) => {
    acc[value.id] = React.useRef();
    return acc;
  }, {});

  const handleClick = (item) => {
    console.log(item);
    if (item?.poster_path) {
      setActiveImage(item.poster_path);
    } else {
      setActiveImage("/images/poster.jpg");
    }
    // setActiveImage();
    return refs[item.id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      
    });
  };
  // useEffect(() => {
  //   let counter = 0;
    
  // }, []);

  console.log(activeImage);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.imageContainer}>
        <Image src={activeImage} alt={activeImage} fill />
      </div>
      <div className={styles.body}>
        {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper"> */}
        {movies.map((item) => (
          <div className={styles.movieBody} key={item.id} ref={refs[item.id]}>
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
                onClick={() => window.location.href='https://www.youtube.com/watch?v=qEVUtrk8_B4'}
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
