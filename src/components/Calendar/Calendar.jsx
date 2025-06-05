import React, { useState } from 'react';
import styles from './Calendar.module.css';
import leftArrow from '../../assets/icons/shape-left.svg';
import rightArrow from '../../assets/icons/shape-right.svg';

const Calendar = ({ onSelect, initialDate, onCancel, onConfirm }) => {
  const [currentMonth, setCurrentMonth] = useState(initialDate ? new Date(initialDate) : new Date());
  const [selectedDays, setSelectedDays] = useState([]);
  
  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  
  const weekDaysShort = ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'];
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year, month) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; 
  };
  
  const getPreviousMonthDays = (year, month) => {
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const daysInPreviousMonth = getDaysInMonth(year, month - 1);
    
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({
        day: daysInPreviousMonth - firstDayOfMonth + i + 1,
        month: month - 1,
        year,
        isCurrentMonth: false
      });
    }
    
    return days;
  };
  
  const getCurrentMonthDays = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        month,
        year,
        isCurrentMonth: true
      });
    }
    
    return days;
  };
  
  const getNextMonthDays = (year, month, currentMonthDays, previousMonthDays) => {
    // Возвращаем пустой массив, чтобы не показывать дни следующего месяца
    return [];
  };
  
  const handlePrevMonth = () => {
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      return newMonth;
    });
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + 1);
      return newMonth;
    });
  };
  
  const handleDayClick = (day) => {
    // Если это первый выбор или сбрасываем выбор
    if (selectedDays.length === 0 || selectedDays.length > 1) {
      const newSelectedDays = [day];
      setSelectedDays(newSelectedDays);
      
      if (onSelect) {
        onSelect(newSelectedDays);
      }
    } else {
      // Если это второй выбор, создаем диапазон между первым и вторым выбором
      const firstDay = selectedDays[0];
      const firstDate = new Date(firstDay.year, firstDay.month, firstDay.day);
      const secondDate = new Date(day.year, day.month, day.day);
      
      // Если кликнули на тот же день, оставляем только его
      if (firstDate.getTime() === secondDate.getTime()) {
        const newSelectedDays = [day];
        setSelectedDays(newSelectedDays);
        
        if (onSelect) {
          onSelect(newSelectedDays);
        }
        return;
      }
      
      // Определяем начальную и конечную даты
      const startDate = firstDate < secondDate ? firstDate : secondDate;
      const endDate = firstDate < secondDate ? secondDate : firstDate;
      
      // Создаем массив дат в диапазоне
      const range = [];
      const currentDate = new Date(startDate);
      
      while (currentDate <= endDate) {
        const isFirstDay = currentDate.getTime() === startDate.getTime();
        const isLastDay = currentDate.getTime() === endDate.getTime();
        const isInBetween = !isFirstDay && !isLastDay;
        
        range.push({
          day: currentDate.getDate(),
          month: currentDate.getMonth(),
          year: currentDate.getFullYear(),
          isCurrentMonth: currentDate.getMonth() === currentMonth.getMonth(),
          isFirstDay,
          isLastDay,
          isInBetween
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      
      setSelectedDays(range);
      
      if (onSelect) {
        onSelect(range);
      }
    }
  };
  
  const isDaySelected = (day) => {
    return selectedDays.some(
      d => d.day === day.day && d.month === day.month && d.year === day.year
    );
  };
  
  const isFirstSelected = (day) => {
    if (selectedDays.length === 0) return false;
    
    const firstDay = selectedDays[0];
    return day.day === firstDay.day && day.month === firstDay.month && day.year === firstDay.year;
  };
  
  const isLastSelected = (day) => {
    if (selectedDays.length === 0) return false;
    
    const lastDay = selectedDays[selectedDays.length - 1];
    return day.day === lastDay.day && day.month === lastDay.month && day.year === lastDay.year;
  };
  
  const isToday = (day) => {
    const today = new Date();
    return (
      day.day === today.getDate() &&
      day.month === today.getMonth() &&
      day.year === today.getFullYear()
    );
  };
  
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };
  
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(selectedDays);
    }
  };
  
  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const previousMonthDays = getPreviousMonthDays(year, month);
    const currentMonthDays = getCurrentMonthDays(year, month);
    
    // Объединяем дни предыдущего и текущего месяца
    const allDays = [...previousMonthDays, ...currentMonthDays];
    
    // Разбиваем на недели
    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7) {
      const week = allDays.slice(i, i + 7);
      // Добавляем только непустые недели
      if (week.length > 0) {
        weeks.push(week);
      }
    }
    
    return (
      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          <button className={styles.navButton} onClick={handlePrevMonth}>
            <img src={leftArrow} alt="Предыдущий месяц" />
          </button>
          <div className={styles.monthYearLabel}>
            {monthNames[month]}
          </div>
          <button className={styles.navButton} onClick={handleNextMonth}>
            <img src={rightArrow} alt="Следующий месяц" />
          </button>
        </div>
        
        <div className={styles.weekDays}>
          {weekDaysShort.map((day, index) => (
            <div key={index} className={styles.weekDay}>
              {day}
            </div>
          ))}
        </div>
        
        <div className={styles.calendarDays}>
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className={styles.week}>
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`${styles.day} 
                    ${!day.isCurrentMonth ? styles.otherMonth : ''} 
                    ${isDaySelected(day) ? styles.selected : ''} 
                    ${isFirstSelected(day) ? styles.firstSelected : ''} 
                    ${isLastSelected(day) ? styles.lastSelected : ''} 
                    ${isToday(day) ? styles.today : ''}`}
                  onClick={() => handleDayClick(day)}
                >
                  {day.day}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className={styles.calendarActions}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Отменить
          </button>
          <button className={styles.selectButton} onClick={handleConfirm}>
            Выбрать
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <>
      <div className={styles.calendarOverlay} style={{ opacity: 0.84 }}></div>
      <div className={styles.calendarWrapper}>
        {renderCalendar()}
      </div>
    </>
  );
};

export default Calendar;
