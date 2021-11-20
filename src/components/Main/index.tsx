import React from 'react';

const Main = ({ children, className }: DefaultProps): JSX.Element => {
  return (
    <main
      role="main"
      className={
        className
          ? Array.isArray(className)
            ? className.join(' ')
            : className
          : ''
      }
    >
      {children}
    </main>
  );
};
export default Main;
