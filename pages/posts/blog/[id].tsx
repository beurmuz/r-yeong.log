import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import styles from "../../../src/styles/detail.module.css";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../../lib/post";
import Head from "next/head";

const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.titleName}>{postData.title}</h1>
        <div className={styles.dateStyle}>
          <div>{postData.date}</div>
        </div>
        <div
          className={styles.contentBox}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
      <footer>
        <p>ⓒ 2023 beurmuz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const paths = getAllPostIds();
  // [{params: {id: '제목'} }]
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
