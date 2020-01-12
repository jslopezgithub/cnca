import React from 'react';

export default function Footer() {
  const style = {
    display: 'block',
    backgroundColor: 'gray',
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
    position: 'fixed',

    top: '97.5%',
    height: '24px',
    width: '-webkit-fill-available'
  };

  return <div style={style}>Copy-Right 2019-2020 CYF - All Rights Recived</div>;
}
