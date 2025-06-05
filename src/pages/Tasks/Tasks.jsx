import React from 'react'
import styles from './styles.module.css'
import TaskTracker from '../../components/TaskTracker/TaskTracker'
import Profile from '../../components/Profile/Profile'
import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'
import StatsIcon from '../../assets/icons/stats.svg'
import Sidebar from '../../components/Sidebar/Sidebar'

const Tasks = () => {
  const users = [
    { id: 1, name: 'Георгий', avatarUrl: '', completed: 1, total: 3 },
    { id: 2, name: 'lizerginof', avatarUrl: '', completed: 0, total: 1 },
    { id: 3, name: 'Dasha Kuleva', avatarUrl: '', completed: 0, total: 2 },
    { id: 4, name: 'Dasha Kuleva', avatarUrl: '', completed: 1, total: 2 },
    { id: 5, name: 'Dasha Kuleva', avatarUrl: '', completed: 3, total: 3 },
    { id: 6, name: 'Dasha Kuleva', avatarUrl: '', completed: 0, total: 2 },
    { id: 7, name: 'Dasha Kuleva', avatarUrl: '', completed: 1, total: 3 },
    { id: 8, name: 'Dasha Kuleva', avatarUrl: '', completed: 0, total: 1 },
    { id: 9, name: 'Dasha Kuleva', avatarUrl: '', completed: 0, total: 3 },
  ];
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <TaskTracker />
          <Profile title="@IPMbot" image="" />
        </div>
        <div className={styles.content}>
          <ViewWrapper title="Статистика по задачам" icon={StatsIcon} subtitle="6/20 задач" ContentTitle="Всего завершено:" onClick={() => { }} />
        </div>
        <div className={styles.taskUser}>
          <div className={styles.userList}>
            {users.map(user => (
              <div key={user.id} className={styles.userItem}>
                <div className={styles.userInfoWrapper}>
                  <div className={styles.userInfo}>
                    <div className={styles.userAvatar}>
                      <img src={user.avatarUrl} alt={user.name} className={styles.avatarImage} />
                    </div>
                    <span className={styles.userName}>{user.name}</span>
                  </div>
                </div>
                <div className={styles.userStatusWrapper}>
                  <div className={styles.userStatus}>
                    <span>Завершено: {user.completed}/{user.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Sidebar/>
      </div>
    </>
  )
}

export default Tasks