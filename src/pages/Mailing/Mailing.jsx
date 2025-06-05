import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Profile from '../../components/Profile/Profile'
import usersIcon from '../../assets/icons/users.svg'
import megaphoneIcon from '../../assets/icons/megaphone.svg'
import refreshIcon from '../../assets/icons/refresh.svg'
import Back from '../../components/Back/Back'
import checkIcon from '../../assets/icons/chek.svg'
import checkboxIcon from '../../assets/icons/сheckbox.svg'

const Mailing = () => {
    const [inputValue, setInputValue] = useState('')
    const [showUsersList, setShowUsersList] = useState(false)
    const usersListRef = useRef(null)
    const headerContentRef = useRef(null)
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showUsersList && 
                usersListRef.current && 
                !usersListRef.current.contains(event.target) &&
                headerContentRef.current &&
                !headerContentRef.current.contains(event.target)) {
                setShowUsersList(false)
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showUsersList])
    
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
    ])
    
    // Функция для переключения выбора пользователя
    const toggleUserSelection = (userId) => {
        setUsers(users.map(user => 
            user.id === userId ? { ...user, selected: !user.selected } : user
        ))
    }
    
    // Получаем количество выбранных пользователей
    const selectedUsersCount = users.filter(user => user.selected).length

    const messages = [
        { id: 1, text: 'Что писали в группе "рабочая" вчера?', time: '10:11', isBot: true },
        { id: 2, text: 'Хорошо, я напишу сообщение @dsf в 12:23. Ваше сообщение "выпывыпывыпы"', time: '10:11', isBot: false }
    ]

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setInputValue('')
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className={styles.container}>
            <header className={styles.headerTop}>
                <Back />
                <div className={styles.headerTitle}>
                    <span>Создать рассылку</span>
                    <img src={megaphoneIcon} alt="Мегафон" />
                </div>
            </header>
            <div className={styles.header}>
                <Profile title="@IPMbot" image="" />
                <div 
                    className={styles.headerContent}
                    onClick={() => setShowUsersList(!showUsersList)}
                    ref={headerContentRef}
                >
                    <span>Отправить {selectedUsersCount}/{users.length}</span>
                    <span><img src={usersIcon} alt="Пользователи" /></span>
                </div>
                
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
                            <span>Отправить {selectedUsersCount}/{users.length}</span>
                            <span><img src={usersIcon} alt="Пользователи" /></span>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.messagesContainer}>
                    <div className={styles.timeLabel}>4.04</div>
                    {messages.map((message) => (
                        <div key={message.id} className={`${styles.messageWrapper} ${message.isBot ? styles.botMessage : styles.userMessage}`}>
                            <div className={styles.message}>
                                <div className={styles.messageText}>{message.text}</div>
                                <div className={styles.messageTime}>{message.time}</div>
                            </div>
                            {!message.isBot && (
                                <button className={styles.cancelButton}>Отменить</button>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.inputContainer}>
                    <textarea
                        className={styles.messageInput}
                        placeholder="Напишите ваш запрос..."
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className={styles.sendButton}
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                    >
                        <img src={refreshIcon} alt="Отправить" />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Mailing