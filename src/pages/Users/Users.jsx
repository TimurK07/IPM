import React, { useState } from 'react'
import styles from './styles.module.css'
import Profile from '../../components/Profile/Profile'
import Input from '../../shared/ui/Input/Input'
import SearchIcon from '../../assets/icons/search.svg'
import ChatIcon from '../../assets/icons/chat.svg'
import UserManIcon from '../../assets/images/user-man.png'


const Users = () => {
    const usersData = [
        {
            name: "Георгий",
            link: "@georgelapp",
            avatar: UserManIcon,
            role: "admin",
            specialization: "бэкенд-разработчик"
        },
        {
            name: "lizerginof",
            link: "@lizerginof",
            avatar: UserManIcon,
            role: "-",
            specialization: "аналитик"
        },
    ]

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(usersData);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        
        if (query.trim() === '') {
            setFilteredUsers(usersData);
        } else {
            const filtered = usersData.filter(user => {
                return (
                    user.name.toLowerCase().includes(query.toLowerCase()) ||
                    user.link.toLowerCase().includes(query.toLowerCase())
                );
            });
            setFilteredUsers(filtered);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>Люди</div>
                    <Profile title="@IPMbot" image="" />
                </div>
                <Input
                    placeholder="Введите имя человека"
                    icon={<img src={SearchIcon} alt="search" width="24" height="24" />}
                    color='#000'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className={styles.content}>
                    {filteredUsers.length > 0 ? (
                        <div className={styles.contentUsers}>
                            {filteredUsers.map((user, index) => (
                                <div key={index} className={styles.contentUser}>
                                    <div className={styles.contentUserWrapper}>
                                        <div className={styles.contentUserItem}>
                                            <div className={styles.contentUserItemAvatar}>
                                                <img src={user.avatar} alt={user.name} />
                                            </div>
                                        </div>
                                        <div className={styles.contentUserItemInfoWrapper}>
                                            <div className={styles.contentUserItemInfoName}>
                                                <div className={styles.contentUserItemName}>{user.name}</div>
                                                <div className={styles.contentUserItemLink}>{user.link}</div>
                                            </div>
                                            <div className={styles.contentUserItemInfoRole}>
                                                <div className={styles.contentUserRole}>Роль в чате: <span>{user.role}</span></div>
                                                <div className={styles.contentUserSpecialization}>Специализация: <span>{user.specialization}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.button}>
                                        <button className={styles.buttonContent}><img src={ChatIcon} alt="chat" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noResults}>
                            <div className={styles.noResultsText}>Пользователи не найдены</div>
                            <div className={styles.noResultsSubtext}>Попробуйте изменить поисковый запрос</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Users