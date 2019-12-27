import React from 'react';
import 'bulma/css/bulma.css';
import Calander from './Calander';

function FullName() {
  return (
    <div className="box" style={{ width: 200 }}>
      <Calander />
      <p className="box" style={{ width: 100, 'text-align': 'center' }}>
        {/* {First Name} */}
      </p>
      <p className="box" style={{ width: 100, 'text-align': 'center' }}>
        {/* {Last Name} */}
      </p>
    </div>
  );
}

export default FullName;
