import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import IndexPageFeed from '../../components/feeds/bunch/IndexPageFeed';
import { AddNewIcon, ArrowLeft, MoreIcon } from '../../components/helper/NavigtorIcons';
import IndexList from '../../components/list/bunch/IndexList';
import styles from "../../styles/index.module.css"

const List = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <Head>
        <title>List</title>
        <meta name="list" content="cow cow username" />
      </Head>
      <div className={styles.index__container}>
        <div className={styles.index__content}>
          <IndexList username={String(username)} />
        </div>
        <div className={styles.index__feeds}>
          <IndexPageFeed />
        </div>
      </div>
    </div>
  );
};


export default List;
