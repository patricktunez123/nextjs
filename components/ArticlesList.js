import React from "react";
import Styles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticlesList = ({ posts }) => {
  console.log("post", posts);
  return (
    <>
      {!posts ? (
        <div className={Styles.grid}>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={Styles.grid}>
          {posts.map((post) => (
            <ArticleItem key={post.id} {...post} />
          ))}
        </div>
      )}
    </>
  );
};

export default ArticlesList;
