import React, { useState } from 'react'
import styles from './styles.module.css'
import Back from '../../../components/Back/Back'
import calendarIcon from '../../../assets/icons/calendar.svg'
import Calendar from '../../../components/Calendar/Calendar'

const SprintDuration = () => {
    const [currentSprintDuration, setCurrentSprintDuration] = useState('23.04-30.04');
    const [nextSprintDuration, setNextSprintDuration] = useState('20.05-30.05');
    const [showCurrentSprintCalendar, setShowCurrentSprintCalendar] = useState(false);
    const [showNextSprintCalendar, setShowNextSprintCalendar] = useState(false);
    
    const handleCurrentCalendarOpen = () => {
        setShowCurrentSprintCalendar(true);
    };
    
    const handleNextCalendarOpen = () => {
        setShowNextSprintCalendar(true);
    };
    
    const handleCalendarCancel = () => {
        setShowCurrentSprintCalendar(false);
        setShowNextSprintCalendar(false);
    };
    
    const handleCurrentCalendarConfirm = (selectedDays) => {
        if (selectedDays.length >= 2) {
            // Сортируем выбранные дни
            const sortedDays = [...selectedDays].sort((a, b) => {
                const dateA = new Date(a.year, a.month, a.day);
                const dateB = new Date(b.year, b.month, b.day);
                return dateA - dateB;
            });
            
            // Берем первый и последний день для диапазона
            const startDay = sortedDays[0];
            const endDay = sortedDays[sortedDays.length - 1];
            
            // Форматируем даты в строку
            const formatDate = (day) => {
                const d = day.day.toString().padStart(2, '0');
                const m = (day.month + 1).toString().padStart(2, '0');
                return `${d}.${m}`;
            };
            
            setCurrentSprintDuration(`${formatDate(startDay)}-${formatDate(endDay)}`);
        }
        setShowCurrentSprintCalendar(false);
    };
    
    const handleNextCalendarConfirm = (selectedDays) => {
        if (selectedDays.length >= 2) {
            // Сортируем выбранные дни
            const sortedDays = [...selectedDays].sort((a, b) => {
                const dateA = new Date(a.year, a.month, a.day);
                const dateB = new Date(b.year, b.month, b.day);
                return dateA - dateB;
            });
            
            // Берем первый и последний день для диапазона
            const startDay = sortedDays[0];
            const endDay = sortedDays[sortedDays.length - 1];
            
            // Форматируем даты в строку
            const formatDate = (day) => {
                const d = day.day.toString().padStart(2, '0');
                const m = (day.month + 1).toString().padStart(2, '0');
                return `${d}.${m}`;
            };
            
            setNextSprintDuration(`${formatDate(startDay)}-${formatDate(endDay)}`);
        }
        setShowNextSprintCalendar(false);
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Back />
                <div className={styles.headerTitle}>
                    Длительность спринта
                </div>
                <div></div>
            </div>
            <div className={styles.content}>
                <div className={styles.InputsWrapper}>
                    <div className={styles.InputWrapper}>
                        <label htmlFor="" className={styles.InputLabel}>Длительность текущего спринта</label>
                        <div style={{ position: 'relative' }} onClick={handleCurrentCalendarOpen}>
                            <input 
                                type="text" 
                                value={currentSprintDuration}
                                readOnly
                                className={styles.Input} 
                            />
                            <img src={calendarIcon} alt="" className={styles.inputIcon} />
                        </div>
                    </div>
                    
                    <div className={styles.InputWrapper}>
                        <label htmlFor="" className={styles.InputLabel}>Длительность будущего спринта</label>
                        <div style={{ position: 'relative' }} onClick={handleNextCalendarOpen}>
                            <input 
                                type="text" 
                                value={nextSprintDuration}
                                readOnly
                                className={styles.Input} 
                            />
                            <img src={calendarIcon} alt="" className={styles.inputIcon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.addButton}>Сохранить</button>
            </div>
            
            {showCurrentSprintCalendar && (
                <Calendar 
                    onCancel={handleCalendarCancel} 
                    onConfirm={handleCurrentCalendarConfirm} 
                />
            )}
            
            {showNextSprintCalendar && (
                <Calendar 
                    onCancel={handleCalendarCancel} 
                    onConfirm={handleNextCalendarConfirm} 
                />
            )}
        </div>
    )
}

export default SprintDuration