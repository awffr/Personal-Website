import React, { useState, useEffect } from 'react';

const MenuWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const bottomThreshold = window.innerHeight - 100; // Adjust as needed
    if (e.clientY > bottomThreshold) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          bottom: isMenuVisible ? '0px' : '-100px', // Hide the menu if not visible
          left: '50%',
          transform: 'translateX(-50%)',
          transition: 'bottom 0.5s ease', // Smooth transition
          width: '100%', // This is the actual width
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10, // Ensure it is on top of other elements
        }}
        onMouseEnter={() => setIsMenuHovered(true)}
        onMouseLeave={() => setIsMenuHovered(false)}
      >
        {children}
      </div>

      {!isMenuHovered && (
        <div
          style={{
            position: 'fixed',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '15%',
            height: '3px', // Height of the indicator bar
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light white color
            borderTop: '1px solid rgba(255, 255, 255, 0.3)', // Optional: subtle border
            zIndex: 5, // Ensure it is below the menu
          }}
        ></div>
      )}
    </div>
  );
};

export default MenuWrapper;
