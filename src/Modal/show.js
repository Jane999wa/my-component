import React, { useState } from 'react';
import Dialog from './index';

const Modal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <p onClick={openDialog} style={{ cursor: 'pointer', color:'#5976ba' }}>
        点击打开dialog
      </p>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <h2>提示</h2>
        <p>这是一段信息</p>
      </Dialog>
    </div>
  );
};

export default Modal;