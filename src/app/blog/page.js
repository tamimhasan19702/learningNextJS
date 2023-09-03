/** @format */

import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.main}>
      <div className="blogSection">
        <h2 className={styles.blogIntro}>Popular Blogs</h2>

        <div className={styles.blogs}>
          
          <div className={styles.blogItem}>
            <Link href={"/blogpost/learn-javascript"}>
              <h3 className={styles.blogHead}>
                How to Learn javascript in 2022
              </h3>

              <p>
                Javascript is one of the most popular programming languages in
                the world
              </p>
            </Link>
          </div>

          <div className={styles.blogItem}>
            <Link href={"/blogpost/learn-javascript"}>
              <h3 className={styles.blogHead}>
                How to Learn javascript in 2022
              </h3>

              <p>
                Javascript is one of the most popular programming languages in
                the world
              </p>
            </Link>
          </div>

          <div className={styles.blogItem}>
            <Link href={"/blogpost/learn-javascript"}>
              <h3 className={styles.blogHead}>
                How to Learn javascript in 2022
              </h3>

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
