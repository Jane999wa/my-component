import React, { useState } from 'react';
import './index.css';

const Switch = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className='container'>
      <span className='left'>左</span>
      <div className={`switch-container ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <div className="switch-slider"></div>
      </div>
      <span className='right'>右</span>
    </div>
  );
};

export default Switch;