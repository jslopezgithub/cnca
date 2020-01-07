import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
import './UserData.css';

export default function UserData() {
  return (
    <div>
      {/*  <Router>
       <Route path='./home/modulo' component={FirstPage} />
        <Route path='./home/riepilogo' component={SecondPage} />
      </Router> */}
      <Router>
        <Route path="/home/firstpage" component={FirstPage} />
        <Route path="/home/secondpage" component={SecondPage} />
        <Route path="/home/thirdpage" component={ThirdPage} />
      </Router>
    </div>
  );
}
