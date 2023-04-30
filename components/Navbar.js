import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import Head from "next/head";
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.first}>
          <Image src="/images/logo.svg" width={40} height={40} />
          <h1 className={styles.logoName}>Mast Movies</h1>
        </div>

        <div className={styles.last}>
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
