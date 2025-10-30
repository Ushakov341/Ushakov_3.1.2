import React, { ReactNode, FormEvent } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: (data: Record<string, string>) => void;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      {children}
    </form>
  );
};
