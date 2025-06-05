import React from 'react'
import styles from './styles.module.css'
import Back from '../../../components/Back/Back'

const DailyToTasks = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Back />
                    <div className={styles.headerTitle}>
                        Дейли к задачам
                    </div>
                    <div></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.InputsWrapper}>
                        <div className={styles.InputWrapper}>
                            <label htmlFor="" className={styles.InputLabel}>Описание</label>
                            <input type="text" placeholder="Напишите описание" className={styles.Input} />
                        </div>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button className={styles.addButton}>Добавить</button>
                </div>
            </div>
        </>
    )
}

export default DailyToTasks