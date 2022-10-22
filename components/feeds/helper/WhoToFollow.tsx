import React from 'react'
import Image from 'next/image'
import styles from "../style/whotofollow.module.css"

const WhoToFollow = () => {
  return (
    <div className={styles.wtf__container}>
      <h3 className={styles.wtf__heading}>Who To Follow</h3>
      <Person />
      <Person />
      <Person />
    </div>
  );
}

const Person = () =>{
    return (
      <div className={styles.person__container}>
        <div>
          <Image className={styles.person__dp} src="/first.jpg" alt="sample" height={50} width={50} />
        </div>
        <div className={styles.person__info__container}>
          <div>
            <p className={styles.person__name}>Name</p>
            <p className={styles.person__username}>@name</p>
          </div>
          <div>
            <button className={styles.person__follow__button}>Follow</button>
          </div>
        </div>
      </div>
    );
}

export default WhoToFollow