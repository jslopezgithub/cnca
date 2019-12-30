import React from 'react';

const style = {
  display: 'flex',
  position: 'absolute',
  top: '13%',
  left: '1%',
  width: '177px',
  height: '160px !important',
  fontSize: '9px'
};
export default function Table1() {
  return (
    <div style={style}>
      <table className='table is-bordered '>
        <tr>
          <th className='tg-c3ow'>ORE ATTIVITA</th>
          <th className='tg-c3ow'> 00:00:00 </th>
        </tr>
        <tr>
          <td className='tg-c3ow'>MALATTIA</td>
          <td className='tg-c3ow'></td>
        </tr>
        <tr>
          <td className='tg-c3ow'>FERIE</td>
          <td className='tg-c3ow'></td>
        </tr>
        <tr>
          <td className='tg-c3ow'>PERMESSI STR</td>
          <td className='tg-c3ow'></td>
        </tr>
        <tr>
          <td className='tg-0lax'>FORMAZIONE</td>
          <td className='tg-0lax'></td>
        </tr>
        <tr>
          <td className='tg-0lax'>ore effettuare in festivo</td>
          <td className='tg-0lax is-danger'></td>
        </tr>
      </table>
    </div>
  );
}
