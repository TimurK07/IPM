import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Back from '../../../components/Back/Back'
import checkIcon from '../../../assets/icons/chek.svg'
import checkboxIcon from '../../../assets/icons/сheckbox.svg'
import usersIcon from '../../../assets/icons/users.svg'
import arrowBottomIcon from '../../../assets/icons/arrow-bottom.svg'
import infoIcon from '../../../assets/icons/info.svg'

const Notifications = () => {
    const [showUsersList, setShowUsersList] = useState(false);
    const [selectedUser, setSelectedUser] = useState('Выбрать 6');
    const [showTimeList1, setShowTimeList1] = useState(false);
    const [showTimeList2, setShowTimeList2] = useState(false);
    const [selectedTime1, setSelectedTime1] = useState('За 24 часа');
    const [selectedTime2, setSelectedTime2] = useState('За 1 час');

    const usersListRef = useRef(null);
    const userSelectRef = useRef(null);
    const timeList1Ref = useRef(null);
    const timeSelect1Ref = useRef(null);
    const timeList2Ref = useRef(null);
    const timeSelect2Ref = useRef(null);

    // Массив пользователей
    const [users, setUsers] = useState([
        { id: 1, name: 'Георгий', avatar: 'https://via.placeholder.com/24', selected: true },
        { id: 2, name: 'lizerginof', avatar: 'https://via.placeholder.com/24', selected: true },
        { id: 3, name: 'Dasha Kuleva', avatar: 'https://via.placeholder.com/24', selected: true },
        { id: 4, name: 'Dasha Kuleva', avatar: 'https://via.placeholder.com/24', selected: true },
        { id: 5, name: 'Dasha Kuleva', avatar: 'https://via.placeholder.com/24', selected: false },
        { id: 6, name: 'Dasha Kuleva', avatar: 'https://via.placeholder.com/24', selected: true },
        { id: 7, name: 'Dasha Kuleva', avatar: 'https://via.placeholder.com/24', selected: true },
        { id: 8, name: 'Dasha Kuleva', avatar: 'https://via.placeholder.com/24', selected: false },
        { id: 9, name: 'Dasha Kuleva', avatar: 'https://via.placeholder.com/24', selected: true },
    ]);

    // Варианты времени для напоминаний
    const timeOptions1 = [
        'За 24 часа',
        'За 2 дня',
        'За 12 часов',
        'За 6 часов'
    ];

    const timeOptions2 = [
        'За 1 час',
        'За 3 часа',
        'За 30 минут',
        'За 15 минут'
    ];

    // Функция для переключения выбора пользователя
    const toggleUserSelection = (userId) => {
        setUsers(users.map(user =>
            user.id === userId ? { ...user, selected: !user.selected } : user
        ));
    };

    // Получаем количество выбранных пользователей
    const selectedUsersCount = users.filter(user => user.selected).length;

    // Обработчики кликов вне выпадающих списков для их закрытия
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Закрытие списка пользователей
            if (showUsersList &&
                usersListRef.current &&
                !usersListRef.current.contains(event.target) &&
                userSelectRef.current &&
                !userSelectRef.current.contains(event.target)) {
                setShowUsersList(false);
            }

            // Закрытие списка времени 1
            if (showTimeList1 &&
                timeList1Ref.current &&
                !timeList1Ref.current.contains(event.target) &&
                timeSelect1Ref.current &&
                !timeSelect1Ref.current.contains(event.target)) {
                setShowTimeList1(false);
            }

            // Закрытие списка времени 2
            if (showTimeList2 &&
                timeList2Ref.current &&
                !timeList2Ref.current.contains(event.target) &&
                timeSelect2Ref.current &&
                !timeSelect2Ref.current.contains(event.target)) {
                setShowTimeList2(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showUsersList, showTimeList1, showTimeList2]);

    // Состояния для переключателей
    const [dailyAndTasks, setDailyAndTasks] = useState(true);
    const [tasksCreated, setTasksCreated] = useState(true);
    const [dailyRating, setDailyRating] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Back />
                <div className={styles.headerTitle}>
                    Уведомления
                </div>
                <div></div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    {/* Выбор пользователя */}
                    <div className={styles.selectWrapper}>
                        <label className={styles.selectLabel}>Выбрать пользователей</label>
                        <button
                            className={styles.selectButton}
                            onClick={() => setShowUsersList(!showUsersList)}
                            ref={userSelectRef}
                        >
                            Выбрано: {selectedUsersCount}
                            <img
                                src={arrowBottomIcon}
                                alt="Стрелка"
                                className={`${styles.arrowIcon} ${showUsersList ? styles.open : ''}`}
                            />
                        </button>

                        {showUsersList && (
                            <div className={styles.usersList} ref={usersListRef}>
                                {users.map(user => (
                                    <div key={user.id} className={styles.usersListItem}>
                                        <div className={styles.userInfo}>
                                            <img src={user.avatar} alt={user.name} className={styles.userAvatar} />
                                            <span>{user.name}</span>
                                        </div>
                                        <img
                                            src={user.selected ? checkIcon : checkboxIcon}
                                            alt={user.selected ? "Выбран" : "Не выбран"}
                                            className={styles.checkboxImage}
                                            onClick={() => toggleUserSelection(user.id)}
                                        />
                                    </div>
                                ))}
                                <div className={styles.usersListFooter}>
                                    Выбрать {selectedUsersCount}/{users.length} <img src={usersIcon} alt="Пользователи" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Выбор времени напоминания о дедлайне задачи */}
                    <div className={styles.timeSelectWrapper}>
                        <label className={styles.timeSelectLabel}>Выбрать напоминание о дедлайне задачи</label>
                        <button
                            className={styles.selectButton}
                            onClick={() => setShowTimeList1(!showTimeList1)}
                            ref={timeSelect1Ref}
                        >
                            {selectedTime1}
                            <img
                                src={arrowBottomIcon}
                                alt="Стрелка"
                                className={`${styles.arrowIcon} ${showTimeList1 ? styles.open : ''}`}
                            />
                        </button>

                        {showTimeList1 && (
                            <div className={styles.timeOptions} ref={timeList1Ref}>
                                {timeOptions1.map((option, index) => (
                                    <div
                                        key={index}
                                        className={styles.timeOption}
                                        onClick={() => {
                                            setSelectedTime1(option);
                                            setShowTimeList1(false);
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Выбор времени напоминания о дейли */}
                    <div className={styles.timeSelectWrapper}>
                        <label className={styles.timeSelectLabel}>Выбрать напоминание о дейли</label>
                        <button
                            className={styles.selectButton}
                            onClick={() => setShowTimeList2(!showTimeList2)}
                            ref={timeSelect2Ref}
                        >
                            {selectedTime2}
                            <img
                                src={arrowBottomIcon}
                                alt="Стрелка"
                                className={`${styles.arrowIcon} ${showTimeList2 ? styles.open : ''}`}
                            />
                        </button>

                        {showTimeList2 && (
                            <div className={styles.timeOptions} ref={timeList2Ref}>
                                {timeOptions2.map((option, index) => (
                                    <div
                                        key={index}
                                        className={styles.timeOption}
                                        onClick={() => {
                                            setSelectedTime2(option);
                                            setShowTimeList2(false);
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Переключатели */}
                <div className={styles.switchesContainer}>
                    <div className={styles.switchItem}>
                        <div className={styles.switchLabel}>Дейли и задачи <img src={infoIcon} alt="" /></div>
                        <div
                            className={`${styles.toggleSwitch} ${dailyAndTasks ? styles.active : ''}`}
                            onClick={() => setDailyAndTasks(!dailyAndTasks)}
                        >
                            <div className={styles.toggleButton}></div>
                        </div>
                    </div>

                    <div className={styles.switchItem}>
                        <div className={styles.switchLabel}>Задачи созданы</div>
                        <div
                            className={`${styles.toggleSwitch} ${tasksCreated ? styles.active : ''}`}
                            onClick={() => setTasksCreated(!tasksCreated)}
                        >
                            <div className={styles.toggleButton}></div>
                        </div>
                    </div>

                    <div className={styles.switchItem}>
                        <div className={styles.switchLabel}>Оценка дейли</div>
                        <div
                            className={`${styles.toggleSwitch} ${dailyRating ? styles.active : ''}`}
                            onClick={() => setDailyRating(!dailyRating)}
                        >
                            <div className={styles.toggleButton}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.saveButton}>Сохранить</button>
            </div>
        </div>
    );
};

export default Notifications