import React, { useState } from 'react'
import styles from './styles.module.css'
import Back from '../../../components/Back/Back'

const DailyRating = () => {
    const [maxRating, setMaxRating] = useState('10');
    const [recommendedRating, setRecommendedRating] = useState('7');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Back />
                <div className={styles.headerTitle}>
                    Оценка дейли
                </div>
                <div></div>
            </div>
            <div className={styles.content}>
                <div className={styles.InputsWrapper}>
                    <div className={styles.InputWrapper}>
                        <label htmlFor="" className={styles.InputLabel}>Максимальный балл</label>
                        <input
                            type="text"
                            value={maxRating}
                            onChange={(e) => setMaxRating(e.target.value)}
                            className={styles.Input}
                        />
                    </div>

                    <div className={styles.InputWrapper}>
                        <label htmlFor="" className={styles.InputLabel}>Рекомендуемый балл</label>
                        <input
                            type="text"
                            value={recommendedRating}
                            onChange={(e) => setRecommendedRating(e.target.value)}
                            className={styles.Input}
                        />
                    </div>

                    <div className={styles.criteriaSection}>
                        <label htmlFor="" className={styles.InputLabel}>Критерии оценки</label>
                        <textarea
                            className={styles.criteriaTextarea}
                            defaultValue={`«Отлично», 90–100%;
«Хорошо», 82–89 %, 75–81%;
«Удовлетворительно», 67–74%.`}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.saveButton}>Сохранить</button>
            </div>
        </div>
    )
}

export default DailyRating