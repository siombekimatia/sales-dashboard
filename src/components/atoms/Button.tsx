// src/components/atoms/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) => {
  
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors focus:outline-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]}${className}`}
      {...props}
    >
      {children}
    </button>
  );
};