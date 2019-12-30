import React from 'react';
<<<<<<< HEAD:Frontend/src/components/Shared/Footer.js
||||||| merged common ancestors
import '../App.css';
=======
import '../../App.css';
>>>>>>> 33da0e49befe25b97d3ab0bf869cf9cae9596e42:Frontend/src/components/Shared/Footer.js

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
