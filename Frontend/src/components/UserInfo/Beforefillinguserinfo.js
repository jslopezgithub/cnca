import React from 'react';
// eslint-disable-next-line import/no-unresolved
import './beforefillinguserinfo.css';

function Beforefillinguserinfo() {
  return (
    <div className="flip">
      <img
        src="~/images/flip_images/branches.jpg"
        alt="Avatar"
        className="flip-image"
        style={{ width: '100%' }}
      />
      <div className="flip-middle">
        <div className="flip-text">
          <br />
          <div className="is-size-6">Over 80 Years of Service</div>
        </div>
      </div>
    </div>
  );
}

export default Beforefillinguserinfo;
