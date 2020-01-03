import React from 'react';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import './UserData.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function UserData() {
  return (
    <div>
      <Router>
        <Route path='/home/firstpage' component={FirstPage} />
        <Route path='/home/secondpage' component={SecondPage} />
      </Router>
    </div>
  );
}
