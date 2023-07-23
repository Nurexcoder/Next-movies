import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
const Navbar = ({ bgColor, getMovies,isSearch }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <div
            className={styles.first}
            style={{
              marginLeft: bgColor ? "20px" : "0",
            }}
          >
            <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
            <h1 className={styles.logoName}>Mast Movies</h1>
          </div>
        </Link>

        <div
          className={styles.last}
          style={{
            marginRight: bgColor ? "20px" : "0",
          }}
        >
          <form
            style={{ display: "flex" }}
            onSubmit={(e) => {
              e.preventDefault();
              if (!isSearch) {
                router.push("/search?q=" + query);
              } else {
                getMovies(query,1);
              }
            }}
          >
            <input
              className={styles.searchInput}
              name="search"
              placeholder="What do you want to watch?"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className={styles.searchIconContainer}>
              <AiOutlineSearch color="white" className={styles.searchIcon} />
            </button>
          </form>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
