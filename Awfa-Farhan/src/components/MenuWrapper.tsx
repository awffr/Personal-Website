import React from 'react';

const MenuWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '6px',
        left: '50%',
        transform: 'translateX(-50%) scale(0.9)', // Combined transform property
        transformOrigin: 'center center', // Ensure scaling is centered
        width: '100%', // This is the actual width
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10, // Ensure it is on top of other elements
      }}
    >
      {children}
    </div>
  );
};

export default MenuWrapper;
