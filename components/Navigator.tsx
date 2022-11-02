import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import {Home,Bookmark,Hash,List,Message,More,Notification,Profile,Logo, MoreIcon} from "../components/helper/NavigtorIcons"
import styles from "./styles/navigator.module.css"

const Navigator = ({handleClick}: notificationType) => {
  return (
    <div className={styles.navigator__parent}>
      <div className={styles.navigator__container}>
        <div className={styles.navigator__logo}>
          <Logo />
        </div>
        <Link href="/">
          <div className={styles.navigator__row}>
            <Home />
            <p>Home</p>
          </div>
        </Link>
        <Link href="/explore">
          <div className={styles.navigator__row}>
            <Hash />
            <p>Explore</p>
          </div>
        </Link>
        <Link href="/notification">
          <div className={styles.navigator__row}>
            <Notification />
            <p>Notification</p>
          </div>
        </Link>
        <div className={styles.navigator__row}>
          <Message />
          <p>Message</p>
        </div>
        <Link href="/bookmark">
          <div className={styles.navigator__row}>
            <Bookmark />
            <p>Bookmark</p>
          </div>
        </Link>
        <Link href={`/${String('bhushan_r')}/list`}>
          <div className={styles.navigator__row}>
            <List />
            <p>List</p>
          </div>
        </Link>
        <Link href={`/profile/${String('hritikdiyundi')}`}>
          <div className={styles.navigator__row}>
            <Profile />
            <p>Profile</p>
          </div>
        </Link>
        <div className={styles.navigator__row}>
          <More />
          <p>More</p>
        </div>
        <div onClick={handleClick} className={styles.navigator__tweet__button}>Tweet</div>
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
          <MoreIcon className={styles.navigator__more__icon} />
        </div>
      </div>
    </div>
  );
};

type notificationType = {
  handleClick: () => void;
};

export default Navigator

