import React from 'react';
// import FirstPage from '../FirstPage/FirstPage';
import './UserData.css';
// component needed in this main component is ;
// import FirstPage from '../FirstPage/FirstPage';

export default function UserData() {
  return (
    <div>
      {/* <FirstPage className="UserData">First Page</FirstPage> */}
      <h1>
        This Component will be rendered for user only when needed to print out
      </h1>

      <p>
        it will fetch data from Rest API and import in it is subcomponents and
        it will be ready to be printed{' '}
      </p>
    </div>
  );
}
