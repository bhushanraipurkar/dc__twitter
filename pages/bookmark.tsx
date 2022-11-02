import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.css';
import IndexPageFeed from '../components/feeds/bunch/IndexPageFeed';
import BookmarkIndex from '../components/bookmark/bunch/BookmarkIndex';
import Header from '../components/bookmark/helper/Header';

const Bookmark: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bookmark</title>
        <meta name="description" content="bookmark cowcow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.index__container}>
        <div className={styles.index__content}>
          <Header/>
          <BookmarkIndex/>
        </div>
        <div className={styles.index__feeds}>
          <IndexPageFeed />
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
