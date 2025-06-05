import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Profile from '../../components/Profile/Profile'
import usersIcon from '../../assets/icons/users.svg'
import megaphoneIcon from '../../assets/icons/megaphone.svg'
import refreshIcon from '../../assets/icons/refresh.svg'
import Back from '../../components/Back/Back'
import checkIcon from '../../assets/icons/chek.svg'
import checkboxIcon from '../../assets/icons/сheckbox.svg'

const GroupChat = () => {
    const [inputValue, setInputValue] = useState('')
    const [showUsersList, setShowUsersList] = useState(false)
    const usersListRef = useRef(null)
    const headerContentRef = useRef(null)

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
                    <span>Сообщение в группу</span>
                    <img src={megaphoneIcon} alt="Мегафон" />
                </div>
            </header>
            <div className={styles.header}>
                <Profile title="@IPMbot" image="" reverse />
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

export default GroupChat