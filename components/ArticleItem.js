import Link from "next/link";
import React from "react";
import Styles from "../styles/Article.module.css";

const ArticleItem = ({ title, body, id }) => {
  return (
    <Link href="article/[id]" as={`article/${id}`}>
      <a className={Styles.card}>
        <h2>{title} &rarr;</h2>
        <p>{body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
