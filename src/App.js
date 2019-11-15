import React, { useState, useRef, useCallback } from 'react';
import '../src/scss/base.scss';
import '../src/scss/TodoSearch.scss';
import TodoTemplate from './components/TodoTemplate';
import TodoSearch from './components/TodoSearch';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
//import TodoHome from './components/TodoHome';

const App = () => {
  //select 값(중요도)
  const [option, setOption] = useState('1순위');
  const onSelect = e => {
    setOption(e.target.value);
  };

  //데이터 예제
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '이렇게 메모앱을 작성하시면 됩니다.',
      option: option,
      checked: false,
    },
  ]);

  const nextId = useRef(2);

  //데이터 추가
  const onInsert = useCallback(
    data => {
      // nextData관리
      const nextData = {
        id: nextId.current,
        text: data,
        option: option,
        checked: false,
      };

      if (data.length === 0) {
        alert('내용을 입력해주세요.');
      } else {
        setTodos(todos => todos.concat(nextData)); //todos에 nextData 추가
        nextId.current += 1; //nextId에 1씩 추가
      }
    },
    [option],
  );

  //데이터 삭제
  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(removeData => removeData.id !== id));
  }, []);

  //checkbox toggle
  const onToggle = useCallback(id => {
    setTodos(todos =>
      todos.map(toggleData =>
        toggleData.id === id
          ? { ...toggleData, checked: !toggleData.checked }
          : toggleData,
      ),
    );
  }, []);

  //데이터 수정
  const onModify = useCallback((id, text) => {
    setTodos(todos =>
      todos.map(toggleData =>
        toggleData.id === id ? { ...toggleData, text: text } : toggleData,
      ),
    );
  }, []);

  //데이터 검색
  const [keyword, setKeyword] = useState('');
  const onChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <>
      {/* <TodoHome /> */}

      <TodoTemplate>
        <TodoSearch value={keyword} onChange={onChange} />
        <TodoInsert onInsert={onInsert} onSelect={onSelect} />

        <TodoList
          todos={todos.filter(data => data.text.indexOf(keyword) > -1)}
          onModify={onModify}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      </TodoTemplate>
    </>
  );
};

export default App;
