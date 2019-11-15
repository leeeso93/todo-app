//일정 템플릿 컴포넌트
import React from 'react';
import '../scss/TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate layout">
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
