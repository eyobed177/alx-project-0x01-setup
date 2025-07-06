import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
