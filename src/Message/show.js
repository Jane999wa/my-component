import React, { useState } from 'react';
import Message from './index';

const Show = () => {
  const [messages, setMessages] = useState([]);

  const showMessage = (type, msg) => {
    setMessages([...messages, { type, message: msg }]);
  };

  const handleClose = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 0);
    setMessages(newMessages);
  };

  return (
    <div>
      <button onClick={() => showMessage('info', '这是一条消息提示')}>消息</button>
      <button onClick={() => showMessage('success', '恭喜你，这是一条成功消息')}>成功</button>
      <button onClick={() => showMessage('warning', '警告哦，这是一条警告消息')}>警告</button>
      <button onClick={() => showMessage('error', '错了哦，这是一条错误消息')}>错误</button>
      {messages.map((msg, index) => (
        <Message 
        key={index} 
        {...msg} 
        zIndex={index}
        onClose={() => handleClose(index)}
         />
      ))}
    </div>
  );
};

export default Show;