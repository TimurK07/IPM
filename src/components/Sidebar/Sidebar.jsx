import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

// Импортируем иконки
import HomeIcon from '../../assets/icons/sidebar/home-active.svg';
import GroupIcon from '../../assets/icons/sidebar/group-active.svg';
import DatabaseIcon from '../../assets/icons/sidebar/database-active.svg';
import SettingsIcon from '../../assets/icons/sidebar/settings-active.svg';

const navItems = [
  { id: 1, path: '/', icon: HomeIcon, label: 'Главная' },
  { id: 2, path: '/users', icon: GroupIcon, label: 'Люди' },
  { id: 3, path: '/database', icon: DatabaseIcon, label: 'База знаний' },
  { id: 4, path: '/settings', icon: SettingsIcon, label: 'Настройки' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className={styles.sidebar}>
      {navItems.map((item) => {
        const isActive = item.path === '/'
          ? location.pathname === '/' ||
            location.pathname.startsWith('/tasks') ||
            location.pathname.startsWith('/mailing') ||
            location.pathname.startsWith('/group-chat') ||
            location.pathname.startsWith('/daily')
          : item.path === '/database'
          ? location.pathname === '/database' || location.pathname === '/link' || location.pathname === '/document'
          : location.pathname === item.path;
        return (
          <NavLink
            key={item.id}
            to={item.path}
            className={`${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            <img
              src={item.icon}
              alt={item.label}
              style={{
                opacity: isActive ? 1 : 0.5,
                width: '24px',
                height: '24px'
              }}
            />
            <span className={styles.navLinkText}>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Sidebar;