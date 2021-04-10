import React from 'react';
import LogoutButton from './LogoutButton';
import { Link , Redirect } from 'react-router-dom';


function Profile({ user , logout }) {
  const { email, password, name } = user || {};
  const handleClick = () => {
      logout();
  }; 



  return (
    <div className = "mainn">
      <h1>Profile</h1>
      <div className = "Char">character</div>
      <dd>blank</dd>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>Password</dt>
      <dd>{password}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
      <LogoutButton logout={handleClick} />
      
    </div>
  );
}

export default Profile;