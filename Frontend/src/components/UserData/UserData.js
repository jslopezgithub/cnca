import React from 'react';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
<<<<<<< HEAD
import ThirdPage from './ThirdPage/ThirdPage';
=======
>>>>>>> d7413d682f6b74d4bdc07291a258ee782aa7ba8b
import './UserData.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function UserData() {
  return (
    <div>
<<<<<<< HEAD
      {/*  <Router>
       <Route path='./home/modulo' component={FirstPage} />
        <Route path='./home/riepilogo' component={SecondPage} />
      </Router> */}
      <Router>
        <Route path='/home/firstpage' component={FirstPage} />
        <Route path='/home/secondpage' component={SecondPage} />
        <Route path='/home/thirdpage' component={ThirdPage} />
=======
      <Router>
        <Route path='/home/firstpage' component={FirstPage} />
        <Route path='/home/secondpage' component={SecondPage} />
>>>>>>> d7413d682f6b74d4bdc07291a258ee782aa7ba8b
      </Router>
    </div>
  );
}
