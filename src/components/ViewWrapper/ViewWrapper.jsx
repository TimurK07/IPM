import React from 'react'
import styles from './styles.module.css'

const ViewWrapper = ({ title, icon, subtitle, ContentTitle, onClick, contents }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>{title}</div>
                <div className={styles.headerIcons}>
                    <img src={icon} alt={title} />
                </div>
            </div>
            
            {contents ? (
                <div className={styles.contentContainer}>
                    {contents.map((item, index) => (
                        <div key={index} className={styles.content}>
                            <div className={styles.contentTitle}>{item.title}</div>
                            <div className={styles.contentSubTitle}>{item.subtitle}</div>
                            {item.icon && (
                                <div className={styles.contentIcon}>
                                    <img src={item.icon} alt="" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.content}>
                    <div className={styles.contentTitle}>{ContentTitle}</div>
                    <div className={styles.contentSubTitle}>{subtitle}</div>
                </div>
            )}
        </div>
    )
}

export default ViewWrapper