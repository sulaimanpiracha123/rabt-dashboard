// components/Button.js
import React from 'react';

const Button = ({ children, onClick, className = '', disabled = false, type = 'button', color = 'green' }) => {
  const baseStyles = `px-4 py-2 font-semibold text-white rounded hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-opacity-50`;
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  // Determine the background color based on the `color` prop
  const bgColor = `bg-${color}-400`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${bgColor} ${disabled ? disabledStyles : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;