import React from 'react';

interface InputProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ name, placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        flex: 1,
        padding: '12px 16px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
      }}
    />
  );
};
