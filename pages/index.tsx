import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../src/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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
        <header>
          <h1>r-yeong</h1>
          <p>Frontend Developer. Ryeong</p>
        </header>
        <section>
          <h2 className={styles.sectionName}>Posts</h2>
          <ul className={styles.postList}></ul>
        </section>
        <footer>
          <p>ⓒ 2023 beurmuz. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
