import React from 'react'
import {Home,Bookmark,Hash,List,Message,More,Notification,Profile} from "../components/helper/NavigtorIcons"
import styles from "./styles/navigator.module.css"

const Navigator = () => {
  return (
    <div className={styles.navigator__parent}>
    <div className={styles.navigator__container}>
      <div className={styles.navigator__row}>
        <Home />
        <p>Home</p>
      </div>
      <div className={styles.navigator__row}>
        <Hash />
        <p>Explore</p>
      </div>
      <div className={styles.navigator__row}>
        <Notification />
        <p>Notification</p>
      </div>
      <div className={styles.navigator__row}>
        <Message />
        <p>Message</p>
      </div>
      <div className={styles.navigator__row}>
        <Bookmark />
        <p>Bookmark</p>
      </div>
      <div className={styles.navigator__row}>
        <List />
        <p>List</p>
      </div>
      <div className={styles.navigator__row}>
        <Profile />
        <p>Profile</p>
      </div>
      <div className={styles.navigator__row}>
        <More />
        <p>More</p>
      </div>
      <div className={styles.navigator__tweet__button}>
        Tweet
      </div>
    </div>
    </div>
  );
}

export default Navigator

