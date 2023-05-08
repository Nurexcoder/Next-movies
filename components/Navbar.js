import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import Head from "next/head";
const Navbar = ({ bgColor }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor ? "rgba(3,37,65,1)" : "transparent",
          width: bgColor ? "100%" : "1200px",
          position: bgColor ? "relative" : "absolute",
        }}
        className={styles.container}
      >
        <div
          className={styles.first}
          style={{
            marginLeft: bgColor ? "20px" : "0",
          }}
        >
          <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
          <h1 className={styles.logoName}>Mast Movies</h1>
        </div>

        <div
          className={styles.last}
          style={{
            marginRight: bgColor ? "20px" : "0",
          }}
        >
          {/* <div className={styles.searchContainer}> */}
          <input
            className={styles.searchInput}
            name="search"
            placeholder="What do you want to watch?"
          />
          <div className={styles.searchIconContainer}>
            <AiOutlineSearch color="white" className={styles.searchIcon} />
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
