import React from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  text,
  width = '100%',
  height = '50px',
  fontSize = '17px',
  fontWeight = 600,
  fontFamily = 'Roboto',
  color = '#FFF',
  backgroundColor = 'linear-gradient(180deg, #17699D 0%, #093243 100%)',
  gap = '10px',
  padding = '15px 12px',
  borderRadius = '10px',
  icon: Icon,
  iconRight = false,
  onClick,
  className = '',
  disabled = false,
  ...rest
}) => {
  const buttonStyle = {
    '--button-width': width,
    '--button-height': height,
    '--button-font-size': fontSize,
    '--button-font-weight': fontWeight,
    '--button-font-family': fontFamily,
    '--button-color': color,
    '--button-bg': backgroundColor,
    '--button-gap': gap,
    '--button-padding': padding,
    '--button-border-radius': borderRadius,
  };

  return (
    <button
      className={`${styles.button} ${className}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <div className={styles.buttonContent}>
        {!iconRight && Icon && (
          <div className={styles.icon}>
            <img src={Icon} alt="" />
          </div>
        )}
        <span className={styles.buttonText}>{text || children}</span>
        {iconRight && Icon && (
          <div className={styles.icon}>
            <img src={Icon} alt="" />
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;