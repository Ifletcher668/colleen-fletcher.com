import React from 'react';

const Main: React.FC<DefaultProps> = ({
  children,
  className,
}: DefaultProps) => {
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
