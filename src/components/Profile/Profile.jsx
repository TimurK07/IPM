import React from 'react'
import styles from './style.module.css'

const Profile = ({ title, image, reverse = false }) => {
  return (
    <div className={styles.container}>
        {!reverse ? (
          <>
            <div className={styles.title}>{title}</div>
            <div className={styles.image}>
                <img src={image} alt={image} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.image}>
                <img src={image} alt={image} />
            </div>
            <div className={styles.title}>{title}</div>
          </>
        )}
    </div>
  )
}

export default Profile