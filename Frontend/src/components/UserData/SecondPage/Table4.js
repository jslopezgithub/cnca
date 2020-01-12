import React from 'react';

export default function Table4() {
  const style = {
    position: 'absolute',
    top: '30%',
    left: '67%',
    width: '268px',
    height: '235px ',
    fontSize: '9px'
  };
  const bluefont = {
    color: 'blue',
    fontSize: '10px',
    fontStyle: 'italic',
    textAlign: 'center'
  };
  return (
    <div style={style}>
      <table className='table is-bordered'>
        <tr>
          <th className='tg-0pky'> Formazione Gnerale</th>
          <th className='tg-c3ow'>0:00:00</th>
          <th className='tg-c3ow'>29:30:00</th>
          <th className='tg-c3ow is-warning'>29:30:00</th>
        </tr>
        <tr style={bluefont}>
          <td className='tg-0pky'>mancano ancora giorni</td>
          <td className='tg-c3ow'>178</td>
          <td className='tg-c3ow'></td>
          <td className='tg-c3ow '></td>
        </tr>
        <tr>
          <td className='tg-0pky'>Formazione Fad entro 180gg</td>
          <td className='tg-c3ow'>0:00:00</td>
          <td className='tg-c3ow'>12:30:00</td>
          <td className='tg-c3ow is-warning'>12:30:00</td>
        </tr>
        <tr style={bluefont}>
          <td className='tg-0lax'>mancano ancora giorni</td>
          <td className='tg-baqh'>178</td>
          <td className='tg-0lax'></td>
          <td className='tg-0lax '></td>
        </tr>
        <tr>
          <td className='tg-0pky'>
            Formazione Specifica
            <br />
            entro90 gg-*13 febbraio 2017
          </td>
          <td className='tg-c3ow'>0:00:00</td>
          <td className='tg-c3ow'>50:30:00</td>
          <td className='tg-c3ow is-warning'>50:30:00</td>
        </tr>
        <tr style={bluefont}>
          <td className='tg-0lax'>mancano ancora giorni</td>
          <td className='tg-baqh'>88</td>
          <td className='tg-0lax'></td>
          <td className='tg-0lax'></td>
        </tr>
        <tr>
          <td className='tg-0lax'>
            Formazione Specifica
            <br />
            entro270 GG *13/08/2017
          </td>
          <td className='tg-baqh'>0</td>
          <td className='tg-0lax'>21:30:00</td>
          <td className='tg-0lax is-warning'>21:30:00</td>
        </tr>
        <tr style={bluefont}>
          <td className='tg-0lax'>mancano ancora giorni</td>
          <td className='tg-baqh'>268</td>
          <td className='tg-0lax'></td>
          <td className='tg-0lax '></td>
        </tr>
      </table>
    </div>
  );
}
