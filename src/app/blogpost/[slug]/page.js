"use client";

import { usePathname } from "next/navigation";
import styles from '../../styles/blogpost.module.css'

const Post = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  return (
    <div className={styles.main}>
      <h1>Title of the page: {slug}</h1>
      <hr />
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veritatis, reprehenderit a eos aspernatur cumque magnam iure! Laudantium perferendis atque quos rem eius vero amet corporis aut, vitae consectetur veniam!
      Praesentium est earum impedit maxime obcaecati necessitatibus temporibus fugiat, odio odit sapiente eligendi corporis vitae distinctio delectus soluta, ratione alias cumque mollitia, enim maiores quaerat? Similique omnis illum consectetur ipsum?
      Quos ipsum sapiente iste et ratione id sed quod totam dolorem ex temporibus quae dolor incidunt asperiores, doloribus architecto voluptate, exercitationem quis. Exercitationem, excepturi quis at aspernatur eius doloremque labore.
      Voluptatibus asperiores quod, ipsa blanditiis quidem mollitia eaque ut odit maxime harum id. Incidunt suscipit non saepe fugiat veniam voluptatibus est. Itaque voluptate quam et doloribus hic incidunt, mollitia dignissimos.
      Enim nobis blanditiis inventore itaque odio dignissimos. Corrupti optio officiis quae maiores consequuntur ex hic magni! Necessitatibus, quis assumenda tempore praesentium quasi repellendus numquam mollitia. Quibusdam, necessitatibus sint? Magnam, commodi.</div>
    </div>
  )
};

export default Post;