import ArticlesList from "../components/ArticlesList";

export default function Home({ posts }) {
  return (
    <>
      <ArticlesList posts={posts} />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};
