import React from 'react';

export default function Table2() {
  const style = {
    position: 'relative',
    top: '41%',
    right: '57%',
    width: '160px',
    height: '330px ',
    fontSize: '9px'
  };
  return (
    <div style={style}>
      <table className='table is-bordered '>
        <tr>
          <th className='tg-c3ow '>attivita1</th>
          <th className='tg-c3ow'> 00:00:00 </th>
        </tr>
        <tr>
          <td className='tg-c3ow'>attivita2</td>
          <td className='tg-c3ow'></td>
        </tr>
        <tr>
          <td className='tg-c3ow'>attivita3</td>
          <td className='tg-c3ow'></td>
        </tr>
        <tr>
          <td className='tg-c3ow'>Ferie</td>
          <td className='tg-c3ow'></td>
        </tr>
        <tr>
          <td className='tg-baqh'>Malatia</td>
          <td className='tg-0lax'></td>
        </tr>
        <tr>
          <td className='tg-baqh'> Formazione Generale </td>
          <td className='tg-0lax'></td>
        </tr>
        <tr>
          <td className='tg-0lax'> Formazione Specifica</td>
          <td className='tg-0lax'></td>
        </tr>
        <tr>
          <td className='tg-0lax'> Formazione FAD</td>
          <td className='tg-0lax'></td>
        </tr>
        <tr>
          <td className='tg-0lax'>
            Permesso str:
            <br />
            donzione sangue
          </td>
          <td className='tg-0lax'></td>
        </tr>
        <tr>
          <td className='tg-0lax'>Permesso str: dliritto voto</td>
          <td className='tg-0lax'></td>
        </tr>
        <tr>
          <td className='tg-0lax'>Permesso str: testimone g</td>
          <td className='tg-0lax'></td>
        </tr>
        <tr>
          <td className='tg-0lax'>Premesso str:seggio eletorale</td>
          <td className='tg-0lax'></td>
        </tr>
      </table>
    </div>
  );
}
