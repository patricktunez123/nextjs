import React from "react";
import Link from "next/link";
import Meta from "../../../components/Meta";
// import { useRouter } from "next/router";

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  const { title, body } = article;

  return (
    <>
      <Meta title={title} description={body} />
      <h3>{title}</h3>
      <p>{body}</p>
      <hr />
      <Link href="/">View all</Link>
    </>
  );
};

export default article;

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await response.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await response.json();

  const IDs = articles.map((article) => article.id);
  const paths = IDs.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
