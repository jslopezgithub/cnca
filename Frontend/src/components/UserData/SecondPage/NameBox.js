import React from 'react';

export default function NameBox() {
  const Name = 'NAME TEXT HOLDER';

  const style = {
    position: 'absolute',
    backgroundColor: '#487eb0',
    width: '188px',
    height: '50px',
    borderRadius: '0px 10px 10px 0px',
    top: '2%'
  };
  const nameBox = {
    backgroundColor: 'white',
    position: 'absolute',
    width: '170px',
    height: '38px',
    top: '12%',
    left: '3.5%',
    borderRadius: '12px',
    overflow: 'hidden',
    textAlign: 'center',
    color: '#353b48',
    fontSize: '16px'
  };
  return (
    <div style={style}>
      <div style={nameBox}>
        <p style={{ marginTop: '7px' }}> {Name}</p>
      </div>
    </div>
  );
}
