import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: '100%',
        padding: '14px 16px',
        fontSize: '16px',
        fontWeight: '500',
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid blue',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
