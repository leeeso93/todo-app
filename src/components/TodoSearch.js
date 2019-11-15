//일정 검색 컴포넌트
import React from 'react';
import '../scss/TodoSearch.scss';

const TodoSearch = ({ keyword, onChange }) => {
  return (
    <div className="TodoSearch">
      <form className="TodoSearch-form">
        <input
          type="search"
          placeholder="빠른 검색"
          value={keyword}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default TodoSearch;
