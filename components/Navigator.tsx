import Image from 'next/image';
import React from 'react'
import {Home,Bookmark,Hash,List,Message,More,Notification,Profile,Logo, MoreIcon} from "../components/helper/NavigtorIcons"
import styles from "./styles/navigator.module.css"

const Navigator = () => {
  return (
    <div className={styles.navigator__parent}>
    <div className={styles.navigator__container}>
      <div className={styles.navigator__logo}>
        <Logo/>
      </div>
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
    <div className={styles.navigation__user__set}>
      <Image 
        src="/one.jpg"
        height={60}
        width={60}
        className={styles.navigator__user__image}
        alt="samplename"
      />
      <div className={styles.navigation__user__right}>
        <div>
          <p className={styles.navigation__user__name}>Name</p>
          <p className={styles.navigation__user__username}>@username</p>
        </div>
        <MoreIcon className={styles.navigator__more__icon}/>
      </div>
    </div>
    </div>
  );
}

export default Navigator

