import React, { useState } from 'react';
import './index.css'

const Form = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirm: '',
    age: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formData.password !== formData.confirm) {
      newErrors.confirm = '两次输入密码不一致!';
    }
    if (!/^\d+$/.test(formData.age)) {
      newErrors.age = '年龄必须是数字';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('submit!');
    }
  };

  const handleReset = () => {
    setFormData({ password: '', confirm: '', age: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className='container'>
        <label>Confirm</label>
        <input
          type="password"
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
        />
        {errors.confirm && <p style={{ color: 'red' }}>{errors.confirm}</p>}
      </div>
      <div className='container'>
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
      </div>
      <button type="submit">提交</button>
      <button type="button" onClick={handleReset}>重置</button>
    </form>
  );
};

export default Form;