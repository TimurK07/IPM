import React from 'react'
import styles from './style.module.css'
import TaskTracker from '../../components/TaskTracker/TaskTracker'
import Profile from '../../components/Profile/Profile'
import Sidebar from '../../components/Sidebar/Sidebar'
import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'
import StatsReportIcon from '../../assets/icons/stats-report.svg'
import starIcon from '../../assets/icons/star.svg'

const Daily = () => {
  const users = [
    { id: 1, name: 'Георгий', avatarUrl: '', time: '10:23, 23.04', status: 'Написал' },
    { id: 2, name: 'lizerginof', avatarUrl: '', time: '10:34, 23.04', status: 'Написал' },
    { id: 3, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
    { id: 4, name: 'Dasha Kuleva', avatarUrl: '', time: '8:45, 23.04', status: 'Написал' },
    { id: 5, name: 'Dasha Kuleva', avatarUrl: '', time: '13:32, 23.04', status: 'Написал' },
    { id: 6, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
    { id: 7, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
    { id: 8, name: 'Dasha Kuleva', avatarUrl: '', time: '15:43, 23.04', status: 'Написал' },
    { id: 9, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
    { id: 9, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
    { id: 9, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
    { id: 9, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
    { id: 9, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
    { id: 9, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
    { id: 9, name: 'Dasha Kuleva', avatarUrl: '', time: '', status: 'Не написал' },
  ];
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <TaskTracker />
          <Profile title="@IPMbot" image="" />
        </div>
        
        <ViewWrapper 
          title="Статистика по дейли" 
          icon={StatsReportIcon} 
          onClick={() => console.log('Открыта статистика')} 
          contents={[
            {
              title: 'Дейли написали:',
              subtitle: '6/9 человек'
            },
            {
              title: 'Оценка дейли:',
              subtitle: '5/10',
              icon: starIcon
            }
          ]}
        />

        <div className={styles.dailyUsers}>
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
                  {user.time && <span className={styles.userTime}>{user.time}</span>}
                </div>
                <div className={`${styles.userStatusWrapper} ${user.status === 'Не написал' ? styles.notWritten : ''}`}>
                  <div className={styles.userStatus}>
                    <span>{user.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default Daily