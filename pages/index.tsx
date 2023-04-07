import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../src/styles/Home.module.css";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";
import Link from "next/link";

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
        <title>r-yeong.log</title>
        <meta
          name='description'
          content='Frontend 개발자, beurmuz의 (기술) 블로그입니다.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        {/* <Link href={`/`}> */}
        <h2 className={styles.sectionName}>Blog</h2>
        {/* </Link> */}
        <div>
          현재 blog를 개발중입니다. 모든 글은 제
          <a href='https://github.com/beurmuz/TIS'>Github</a>에 올린 글과,
          기존에 운영하던 Velog에 올린 내용들을 기반으로 업로드할 예정입니다.
          (2023.04.07)
        </div>
        <ul className={styles.postList}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={styles.postItem} key={id}>
              <Link href={`/posts/blog/${id}`}>
                <span className={styles.postLink}>{title}</span>
              </Link>
              <small className={styles.date}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <p>ⓒ 2023 beurmuz. All rights reserved.</p>
      </footer>
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
