import React, { useState } from 'react';
import { Link , Redirect } from 'react-router-dom';


function Sign_up(authenticated, su) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setC_password] = useState('');
  const [name, setName] = useState('');

  const handleClick = () => {
    try {
      su({ email, password, c_password, name });
    } catch (e) {
      alert('Failed to signUp');
      setEmail('');
      setPassword('');
      setC_password('');
      setName('');
    }
  };
 
  return (
    <div className = "mainn">
    <h1>Sign_up</h1>
    <h3>아이디</h3>
      <input className="textinput"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <h3>비밀번호</h3>
      <input className="textinput"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <h3>비밀번호 확인</h3>
      <input className="textinput"
        value={c_password}
        onChange={({ target: { value } }) => setC_password(value)}
        type="password"
        placeholder="confirm_password"
      />
      <h3>이름</h3>
      <input className="textinput"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        type="text"
        placeholder="name"
      />
      <button onClick={handleClick}>Sign_up</button>
    </div>
  )
}

export default Sign_up