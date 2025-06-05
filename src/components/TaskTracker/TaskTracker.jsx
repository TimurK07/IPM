import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import taskListIcon from '../../assets/icons/task-list.svg';
import Back from '../Back/Back';

const TaskTracker = ({
  title = 'Таск-трекер',
  icon = taskListIcon,
  onClick = () => { },
  className = ''
}) => {
  const location = useLocation();
  const showBackButton = location.pathname === '/tasks' || location.pathname === '/daily';
  return (
    <>
      <div className={styles.container}>
        {showBackButton && <Back />}
        <button
          className={`${styles.button} ${className}`}
          onClick={onClick}
        >
          <div className={styles.buttonContent}>
            <div className={styles.icon}>
              <img src={icon} alt="" />
            </div>
            {title}
          </div>
        </button>
      </div>

    </>
  );
};

export default TaskTracker;