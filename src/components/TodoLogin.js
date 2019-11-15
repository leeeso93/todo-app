import React, { useState } from 'react';

const TodoLogin = () => {
  const [value, setValue] = useState('');

  const onChange = name => {
    setValue(name[value]);
  };

  return (
    <div className="TodoLogin">
      <h1 className="text-center app-title">로그인</h1>

      <form>
        <div className="form-group">
          <label for="userID">아이디</label>
          <input
            type="text"
            class="form-control"
            id="userID"
            name="userId"
            value={value}
            onChange={onChange}
            placeholder="아이디를 입력하세요."
          />
        </div>

        <div className="form-group">
          <label for="userPw">비밀번호</label>
          <input
            type="password"
            class="form-control"
            id="userPw"
            name="userPW"
            value={value}
            onChange={onChange}
            placeholder="비밀번호를 입력하세요."
          />
        </div>

        <button type="submit" className="btn btn-block btn-red">
          로그인
        </button>
      </form>
    </div>
  );
};

export default TodoLogin;
