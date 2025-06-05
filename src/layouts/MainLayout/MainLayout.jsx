import React from 'react';
import styles from './MainLayout.module.css';
import Profile from '../../components/Profile/Profile';
import TaskTracker from '../../components/TaskTracker/TaskTracker';
import Sidebar from '../../components/Sidebar/Sidebar';

const MainLayout = ({ children, showHeader = true }) => {
  return (
    <>
      <div className={styles.container}>
        {showHeader && (
          <div className={styles.header}>
            <TaskTracker />
            <Profile title="@IPMbot" image="" />
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default MainLayout;
