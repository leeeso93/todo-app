import React from 'react';

const TodoSignUp = () => {
  return (
    <div className="TodoSignUp">
      <h1 className="text-center app-title">간단 회원가입</h1>

      <form>
        <div className="form-group">
          <label for="userName">이름</label>
          <input
            type="password"
            class="form-control"
            id="userName"
            placeholder="이름을 입력하세요."
          />
        </div>

        <div className="form-group">
          <label for="userID">아이디</label>
          <input
            type="text"
            class="form-control"
            id="userID"
            placeholder="아이디를 입력하세요."
          />
        </div>

        <div className="form-group">
          <label for="userPw">비밀번호</label>
          <input
            type="password"
            class="form-control"
            id="userPw"
            placeholder="비밀번호를 입력하세요."
          />
        </div>

        <div className="form-group">
          <label for="userPwCheck">비밀번호 확인</label>
          <input
            type="password"
            class="form-control"
            id="userPwCheck"
            placeholder="비밀번호를 입력하세요."
          />
        </div>

        <button type="submit" className="btn btn-block btn-red">
          회원가입 완료
        </button>
      </form>
    </div>
  );
};

export default TodoSignUp;
