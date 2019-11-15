//실제 리스트 부분
import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import '../scss/TodoItem.scss';
import cn from 'classnames';

const TodoItem = ({ todos, onRemove, onToggle, onModify }) => {
  const { id, text, checked } = todos;
  const [value, setValue] = useState('');

  const [view, setView] = useState(false);
  const onChange = e => {
    setValue(e.target.value);
  };

  const onEdit = e => {
    setView(true);
  };

  return (
    <div className="TodoItem">
      <div className="TodoItem-main">
        <div
          className={cn('checkbox text-truncate', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="content text-truncate">
            <span>{text}</span>
          </div>
        </div>

        <div className="edit">
          <FaRegEdit onClick={onEdit} />
        </div>

        <div className="remove" onClick={() => onRemove(id)}>
          <FaTrashAlt />
        </div>
      </div>
      <div className="TodoItem-sub">
        <span className="option">{todos.option}</span>
        <div className={view ? 'edit-box' : 'd-none'}>
          <input type="text" value={value} onChange={onChange} />

          <button
            type="button"
            className="btn"
            onClick={() => onModify(id, value)}
          >
            완료
          </button>
          <button className="btn" onClick={() => setView(false)}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
