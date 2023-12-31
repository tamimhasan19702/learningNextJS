/** @format */

import React from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";

// step 1: collect all the files from the blogData directory
// step 2: iterate through them and display them

const Blog = () => {
  return (
    <div className={styles.main}>

      <div className="blogSection">
        <h2 className={styles.blogIntro}>Popular Blogs</h2>

        <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <Link href={"/blogpost/learn-javascript"}>
              <h2 className={styles.blogHead}>
                How to Learn javascript in 2022
              </h2>

              <p>
                Javascript is one of the most popular programming languages in
                the world
              </p>
            </Link>
          </div>

          <div className={styles.blogItem}>
            <Link href={"/blogpost/learn-javascript"}>
              <h2 className={styles.blogHead}>
                How to Learn javascript in 2022
              </h2>

              <p>
                Javascript is one of the most popular programming languages in
                the world
              </p>
            </Link>
          </div>

          <div className={styles.blogItem}>
            <Link href={"/blogpost/learn-javascript"}>
              <h2 className={styles.blogHead}>
                How to Learn javascript in 2022
              </h2>

              <p>
                Javascript is one of the most popular programming languages in
                the world
              </p>
            </Link>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Blog;
