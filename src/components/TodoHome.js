import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import TodoLogin from '../components/TodoLogin';
import TodoSignUp from '../components/TodoSignUp';
import { MdErrorOutline } from 'react-icons/md';

const TodoHome = () => {
  const active = {
    color: '#db4c3f',
    textDecoration: 'underline',
  };

  return (
    <div className="TodoHome layout">
      <h1 className="text-center">MY TODO</h1>

      <ul className="navbar-nav">
        <li class="nav-item">
          <NavLink to="/login" activeStyle={active}>
            로그인
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/signup" activeStyle={active}>
            회원가입
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/" component={TodoLogin} exact />
        <Route path="/login" component={TodoLogin} />
        <Route path="/signup" component={TodoSignUp} exact />
        <Route
          render={({ location }) => (
            <div>
              <MdErrorOutline className="icon" />
              <br />
              <p className="text-center">존재하지 않는 페이지가 아닐까요?</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};
export default TodoHome;
