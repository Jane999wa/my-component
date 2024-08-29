import React, { useState } from 'react';
import './index.css'; 

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        {children}
        <button onClick={onClose}>取消</button>
        <button onClick={onClose}>确认</button>
      </div>
    </div>
  );
};

export default Dialog;