import React from 'react';

export default function DataOggi() {
  const oggi = '15/01/2020';

  const mainBox = {
    display: 'flex',
    position: 'relative',
    backgroundColor: '#487eb0',
    width: '110px',
    height: '60px',
    left: '80%',
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden'
  };
  const dateBox = {
    backgroundColor: 'white',
    position: 'absolute',
    width: '98px',
    height: '32px',
    color: '#353b48',
    top: '38%',
    left: '3.5%',
    borderRadius: '12px',
    fontSize: '16px',
    textAlign: 'center',
    overflow: 'hidden'
  };
  return (
    <div style={mainBox}>
      <p style={{ marginLeft: '4.5px' }}> DATA DI OGGI</p>
      <div style={dateBox}>
        <p style={{ marginTop: '4px' }}>{oggi}</p>
      </div>
    </div>
  );
}
