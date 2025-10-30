import React, { ReactNode } from 'react';

interface RowProps {
  children: ReactNode;
}

export const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        width: '100%',
        marginBottom: '12px',
      }}
    >
      {children}
    </div>
  );
};
