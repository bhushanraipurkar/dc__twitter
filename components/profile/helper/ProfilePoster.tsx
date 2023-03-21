import React from 'react';
import { ArrowLeft, CalenderIcon } from '../../helper/NavigtorIcons';
import styles from '../styles/profile.module.css';
import { useSession } from 'next-auth/react';

const ProfilePoster = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.profile__body}>
      <div className={styles.profile__top__container}>
        <span className={styles.LeftArrow}>
          <ArrowLeft />
        </span>

        <div>
          <div className={styles.profile__username}>USERNAME</div>
          <p className={styles.profile__tweets}>10 Tweets</p>
        </div>
      </div>
      <div>
        <div className={styles.profile__Background}></div>
        <div className={styles.profile__pic}>
          <img
            className={styles.profile__pic__img}
            src={
              session?.user?.image ||
              'https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg'
            }
          />

          <div className={styles.profile__pic__edit__button}>Edit profile</div>
        </div>
      </div>
      <div className={styles.bio__full__details}>
        <div className={styles.bio__details}>
          <span className={styles.bio__user__name}>
            {session?.user?.name || 'undefined'}
          </span>
          <span className={styles.bio__user__id}>
            @{session?.user?.email || 'undefined'}
          </span>

          <span className={styles.bio__user__bio}>Everything is fine</span>
          <div className={styles.bio__user__joined}>
            <CalenderIcon />
            <span className={styles.bio__user__hbd__text}>
              Born Jan 1, 2000
            </span>
            {/* <div className={styles.bio__user__joined}> */}
            <CalenderIcon />
            <span className={styles.bio__user__joined__text}>
              Joined 1-12-2019
            </span>
          </div>
        </div>

        <div className={styles.bio__user__follows}>
          <span className={styles.bio__user__follows__following}>
            <b>{5 || 0}</b> Following
          </span>
          <span className={styles.bio__user__follows__followers}>
            <b>{5 || 0}</b> Followers
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePoster;
