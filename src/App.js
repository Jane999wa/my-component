import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Switch from'./Switch';
import List from './list/show';
import  Show from './Message/show';
import Modal from './Modal/show';
import NavMenu from './Navigation';

function App() {
  const [activeComponent, setActiveComponent] = useState('');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Form':
        return <Form/>;
      case 'Switch':
        return <Switch/>;
      case 'list':
        return <List/>;
      case 'messageShow':
        return <Show/>;
      case 'modal':
        return <Modal/>
      case 'navigation':
        return <NavMenu/>;
      case 'config':
        return <p>不知道怎么展示 ...</p>
      default:
        return <div>请选择一个组件</div>;
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={() => setActiveComponent('Switch')}>开关</button>
        <button onClick={() => setActiveComponent('messageShow')}>全局提示message</button>
        <button onClick={() => setActiveComponent('list')}>列表</button>
        <button onClick={() => setActiveComponent('Form')}>表单(检验)</button>
        <button onClick={() => setActiveComponent('modal')}>Modal对话框</button>
        <button onClick={() => setActiveComponent('navigation')}>导航菜单</button>
        <button onClick={() => setActiveComponent('config')}>configProvider</button>
      </div>
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;