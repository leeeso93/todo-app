// 일정 입력 컴포넌트
import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import '../scss/TodoInsert.scss';
import Clock from 'react-live-clock';

const TodoInsert = ({ onInsert, onSelect }) => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    onInsert(value);
    setValue('');
    e.preventDefault(); //새로고침 방지
  };

  return (
    <div className="TodoInsert">
      <h1 className="app-title">
        오늘{' '}
        <span>
          {<Clock format={'YYYY 년 MM 월 DD 일 HH시'} ticking={true} />}
        </span>
      </h1>

      <div className="TodoInsert-inner">
        <form className="TodoInsert-form" onSubmit={onSubmit}>
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="할 일을 입력하세요."
          />
          <select onChange={onSelect} className="form-control">
            <option value="1순위">1순위</option>
            <option value="2순위">2순위</option>
            <option value="3순위">3순위</option>
          </select>
          <button type="submit">
            <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoInsert;
