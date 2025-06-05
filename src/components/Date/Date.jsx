import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

const DateComponent = ({ initialDate = new Date(), onChange }) => {
  const [currentDate, setCurrentDate] = useState(initialDate);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}`;
  };

  const getWeekRange = (date) => {
    const currentDate = new Date(date);
    const dayOfWeek = currentDate.getDay() || 7; 
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - dayOfWeek + 1); 
    
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6); 
    
    return {
      start: startDate,
      end: endDate
    };
  };

  const [weekRange, setWeekRange] = useState(getWeekRange(currentDate));

  const changeWeek = (weeks) => {
    const newDate = new Date(weekRange.start);
    newDate.setDate(newDate.getDate() + (weeks * 7));
    setWeekRange(getWeekRange(newDate));
    
    if (onChange) {
      onChange(newDate);
    }
  };

  const handlePrevWeek = () => changeWeek(-1);
  const handleNextWeek = () => changeWeek(1);

  return (
    <div className={styles.dateContainer}>
      <button onClick={handlePrevWeek} className={styles.arrowButton}>
        <img src={arrowLeft} alt="Предыдущая неделя" />
      </button>
      
      <div className={styles.dateRange}>
        {formatDate(weekRange.start)} - {formatDate(weekRange.end)}
      </div>
      
      <button onClick={handleNextWeek} className={styles.arrowButton}>
        <img src={arrowRight} alt="Следующая неделя" />
      </button>
    </div>
  );
};

export default DateComponent;