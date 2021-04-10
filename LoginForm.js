import React, { useState } from 'react';
import { Route, Link , Redirect } from 'react-router-dom';

import './index.css';

function LoginForm({ authenticated, login, location }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert('Failed to login');
      setEmail('');
      setPassword('');
    }
  };

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <div className = "mainn">
      <h1>Login</h1>
      
      <input className="textinput"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="이메일"
      />
      <input className="textinput"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="비밀번호"
      />
      <button onClick={handleClick}>로그인</button>
      <Link to="/sign_up">
        회원가입
      </Link>
    </div>
  );
}

export default LoginForm;