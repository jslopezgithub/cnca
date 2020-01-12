import React from 'react';

export default function Totale() {
  const total = '0:00:00';
  const style = {
    position: 'absolute',
    top: '17%',
    left: '21%',
    width: '60px',
    height: '60px',
    backgroundColor: '#00a8ff',
    borderRadius: '15px',
    textAlign: 'center',
    color: 'white',
    fontSize: '14px'
  };
  const whiteBox = {
    color: '#353b48',
    position: 'absolute',
    left: '2.5px',
    top: '50%',
    backgroundColor: 'white',
    width: '55px',
    height: '25px',
    borderRadius: '10px',
    overflow: 'hidden',
    textAlign: 'center'
  };
  return (
    <div style={style}>
      <p style={{ marginTop: '5px' }}>TOTALE</p>
      <span style={whiteBox}>{total}</span>
    </div>
  );
}
