import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      {children}
    </div>
  );
};
