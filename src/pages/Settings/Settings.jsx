import React, { useState } from 'react'
import styles from './styles.module.css'
import calendarIcon from '../../assets/icons/calendar.svg'
import timeIcon from '../../assets/icons/time.svg'
import starIcon from '../../assets/icons/star-2.svg'
import infoIcon from '../../assets/icons/info.svg'
import Calendar from '../../components/Calendar/Calendar'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
    const [dailyToTasks, setDailyToTasks] = useState(true);
    const [notifications, setNotifications] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [sprintDuration, setSprintDuration] = useState('23.04-30.04');
    
    const navigate = useNavigate();
    
    const handleCalendarOpen = () => {
        setShowCalendar(true);
    };
    
    const handleCalendarCancel = () => {
        setShowCalendar(false);
    };
    
    const handleCalendarConfirm = (selectedDays) => {
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
            
            setSprintDuration(`${formatDate(startDay)}-${formatDate(endDay)}`);
        }
        setShowCalendar(false);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>
                        Настройка ритуалов
                    </div>
                    <div></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.InputsWrapper}>
                        <div className={styles.InputWrapper}>
                            <label htmlFor="" className={styles.InputLabel}>Длительность спринта</label>
                            <div style={{ position: 'relative' }} onClick={() => navigate('/settings/sprint-duration')}>
                                <input 
                                    type="text" 
                                    value={sprintDuration}
                                    readOnly
                                    className={styles.Input} 
                                />
                                <img src={calendarIcon} alt="" className={styles.inputIcon} />
                            </div>
                        </div>

                        <div className={styles.InputWrapper}>
                            <label htmlFor="" className={styles.InputLabel}>Дедлайн дейли</label>
                            <div style={{ position: 'relative' }}>
                                <input type="time" defaultValue="12:00" className={styles.Input} />
                                <img src={timeIcon} alt="" className={styles.inputIcon} />
                            </div>
                        </div>

                        <div className={styles.InputWrapper}>
                            <label htmlFor="" className={styles.InputLabel}>Оценка дейли</label>
                            <div style={{ position: 'relative' }}>
                                <input type="text" placeholder="8" className={styles.Input} />
                                <img src={starIcon} alt="" className={styles.inputIcon} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.toggleWrapperContainer}>
                        <div className={styles.toggleWrapper}>
                            <div className={styles.toggleLabel}>
                                <span>Дейли к задачам</span>
                                <img src={infoIcon} alt="info" className={styles.infoIcon} />
                            </div>
                            <div
                                className={`${styles.toggleSwitch} ${dailyToTasks ? styles.active : ''}`}
                                onClick={() => setDailyToTasks(!dailyToTasks)}
                            >
                                <div className={styles.toggleButton}></div>
                            </div>
                        </div>

                        <div className={styles.toggleWrapper}>
                            <div className={styles.toggleLabel}>
                                <span>Уведомления пользователям</span>
                            </div>
                            <div
                                className={`${styles.toggleSwitch} ${notifications ? styles.active : ''}`}
                                onClick={() => setNotifications(!notifications)}
                            >
                                <div className={styles.toggleButton}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {showCalendar && (
                <Calendar 
                    onCancel={handleCalendarCancel} 
                    onConfirm={handleCalendarConfirm} 
                />
            )}
        </>
    )
}

export default Settings