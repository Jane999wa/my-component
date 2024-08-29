import React, { useState, useEffect } from 'react';
import './index.css';

const Message = ({ type, message, duration = 2000, onClose ,zIndex}) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose?.(); //是否调用onClose
  };

  // 延迟关闭Message
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(handleClose, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, handleClose]);

  return visible ? (
    <div className="message" style={{zIndex}}>
      <div className= "info" >
      <div>{message}</div> 
      <button className="message__close" onClick={handleClose}>
        x
       </button>
      </div>
    </div>
  ) : null;
};

export default Message;