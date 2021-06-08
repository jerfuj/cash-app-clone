import React from 'react'
import styles from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>J</div>
      <h3 className={styles.name}>Jeremy</h3>
      <h4 className={styles.tag}>$jerfuj</h4>
    </div>
  )
}

export default UserInfo
