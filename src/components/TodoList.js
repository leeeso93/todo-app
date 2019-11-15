//일정 리스트가 보이는 컴포넌트
import React from 'react';
import TodoItem from './TodoItem';
import '../scss/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle, onModify }) => {
  return (
    <div className="TodoList">
      {todos.map(todos => (
        <TodoItem
          key={todos.id}
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onModify={onModify}
        />
      ))}
    </div>
  );
};

export default TodoList;
