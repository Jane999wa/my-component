import React, { useState } from 'react';
import './index.css'; 

const NavMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleNavigation = () => {
    window.location.href = 'https://jjze.blogspot.com/'; 
  };

  return (
    <div className="nav-menu">
      <button>处理中心</button>
      <div
        className="nav-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button>我的工作台</button>
        {dropdownOpen && (
          <div className="dropdown">
            <button>选项 1 </button>
            <button>选项 2 </button>
          </div>
        )}
      </div>
      <button disabled>
        消息中心
      </button>
      <button onClick={handleNavigation}>订单管理</button>
    </div>
  );
};

export default NavMenu;