import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.css';
import IndexPageFeed from '../components/feeds/bunch/IndexPageFeed';
import IndexExplore from '../components/explore/bunch/IndexExplore';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Explore</title>
        <meta name="description" content="Explore cowcow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.index__container}>
        <div className={styles.index__content}>
          <IndexExplore/>
        </div>
        <div className={styles.index__feeds}>
          <IndexPageFeed />
        </div>
      </div>
    </div>
  );
};

export default Home;
