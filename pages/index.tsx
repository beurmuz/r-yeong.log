import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../src/styles/Home.module.css";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ryeong-devlog</title>
        <meta
          name='description'
          content='Frontend 개발자, ryeong의 기술 블로그입니다.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <h2 className={styles.sectionName}>Blog</h2>
        <ul className={styles.postList}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={styles.postItem} key={id}>
              {/* <Link href={`/posts/${id}`}> */}
              <a>{title}</a>
              {/* </Link> */}
              <small className={styles.date}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
