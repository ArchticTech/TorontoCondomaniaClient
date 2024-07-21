import React, { useState, useEffect } from 'react';

const NotificationPopup = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000); // Adjust the duration as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, [onClose]);

  const notificationStyle = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    zIndex: 1000,
    display: isVisible ? 'block' : 'none',
  };

  return (
    <div style={notificationStyle}>
      <div style={{ fontSize: '16px' }}>{message}</div>
    </div>
  );
};

export default NotificationPopup;
