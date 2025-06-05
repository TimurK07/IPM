import React from 'react';
import styles from './styles.module.css';

const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  onFocus,
  onBlur,
  className = '',
  style = {},
  // Кастомизация
  fullWidth = true,
  disabled = false,
  error = false,
  success = false,
  icon = null,
  iconPosition = 'left',
  // Стили
  padding = '8px 16px',
  borderRadius = '16px',
  borderColor = 'var(--element-color-admin, #17699D)',
  borderWidth = '1px',
  borderStyle = 'solid',
  backgroundColor = '#fff',
  color = '#333',
  fontSize = '16px',
  placeholderColor = '#999',
  hoverBorderColor = '#999',
  focusBorderColor = '#000',
  errorBorderColor = '#ff4444',
  successBorderColor = '#00c853',
  boxShadow = '0px 1px 8px 0px rgba(3, 0, 138, 0.10)',
  ...rest
}) => {
  const inputClasses = [
    styles.input_container,
    fullWidth && styles.input_fullWidth,
    error && styles.input_error,
    success && styles.input_success,
    className
  ].filter(Boolean).join(' ');

  const inputStyle = {
    '--input-padding': padding,
    '--input-border-radius': borderRadius,
    '--input-border-color': borderColor,
    '--input-border-width': borderWidth,
    '--input-border-style': borderStyle,
    '--input-bg-color': backgroundColor,
    '--input-color': color,
    '--input-font-size': fontSize,
    '--input-placeholder-color': placeholderColor,
    '--input-hover-border-color': hoverBorderColor,
    '--input-focus-border-color': focusBorderColor,
    '--input-error-border-color': errorBorderColor,
    '--input-success-border-color': successBorderColor,
    '--input-box-shadow': boxShadow,
    ...style
  };

  return (
    <div className={inputClasses} style={inputStyle}>
      {icon && iconPosition === 'left' && <div className={styles.icon}>{icon}</div>}
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        {...rest}
      />
      {icon && iconPosition === 'right' && <div className={styles.icon}>{icon}</div>}
    </div>
  );
};

export default Input;