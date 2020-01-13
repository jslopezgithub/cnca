import React from 'react';
import './Home.css';
import UserData from '../UserData/UserData';

export default function Home(props) {
  // console.log(props);

  return (
    <div className="Home">
      <UserData {...props} />
    </div>
  );
}
