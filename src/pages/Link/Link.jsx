import React from 'react'
import styles from './styles.module.css'
import Back from '../../components/Back/Back'
import linkIcon from '../../assets/icons/link-white.svg'

const Link = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.header}>
                <Back />
                <div className={styles.headerTitle}>
                    Ссылка
                    <img src={linkIcon} alt="" className={styles.headerIcon}/>
                </div>
                <div></div>
            </div>
            <div className={styles.content}>
                <div className={styles.InputsWrapper}>
                    <div className={styles.InputWrapper}>
                        <label htmlFor="" className={styles.InputLabel}>Название</label>
                        <input type="text" placeholder="Придумайте название" className={styles.Input}/>
                    </div>
                    <div className={styles.InputWrapper}>
                        <label htmlFor="" className={styles.InputLabel}>Описание</label>
                        <input type="text" placeholder="Напишите описание" className={styles.Input}/>
                    </div>
                    <div className={styles.InputWrapper}>
                        <label htmlFor="" className={styles.InputLabel}>Ссылка</label>
                        <div style={{position: 'relative'}}>
                            <input type="text" placeholder="Вставьте вашу ссылку" className={styles.Input}/>
                            <img src={linkIcon} alt="" className={styles.inputIcon}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.addButton}>Добавить ссылку</button>
                <button className={styles.deleteButton}>Удалить ссылку</button>
            </div>
        </div>
    </>
  )
}

export default Link