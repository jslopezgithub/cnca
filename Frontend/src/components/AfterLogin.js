import React from 'react';
import Home from './Shared/Home';
import UserInfo from './UserInfo/UserInfo';
import './AfterLogin.css';

export default function AfterLogin() {
  return (
    <div>
      <Home />
      <UserInfo />
    </div>
  );
}
