import React from 'react';

export default function Navbar() {
  const style = {
    // eslint-disable-next-line no-undef
    backgroundImage: `url(${'../../Images/CNCA-small-LOGO.png'})`,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'sticky',
    height: '24px',
    width: '-webkit-fill-available'
  };

  return <div style={style} className="Navbar"></div>;
}
