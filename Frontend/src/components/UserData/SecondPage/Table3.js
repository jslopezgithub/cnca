import React from 'react';

export default function Table3() {
  const style = {
    position: 'absolute',
    top: '13%',
    left: '67%',
    width: '330px',
    height: '110px ',
    fontSize: '9px'
  };
  return (
    <div style={style}>
      <table
        className='table is-bordered
'
      >
        <tr>
          <th className='tg-0pky'>
            &nbsp;&nbsp;&nbsp;SALDI GENETALI&nbsp;&nbsp;
          </th>
          <th className='tg-c3ow'>GIORNI</th>
          <th className='tg-c3ow'>RIMANETI</th>
          <th className='tg-c3ow'>GIORNI</th>
        </tr>
        <tr>
          <td className='tg-0pky'>Saldo ferie</td>
          <td className='tg-c3ow'>0</td>
          <td className='tg-c3ow'>20</td>
          <td className='tg-c3ow'>20</td>
        </tr>
        <tr>
          <td className='tg-0pky'>Saldo malattia pagata</td>
          <td className='tg-c3ow'>0</td>
          <td className='tg-c3ow'>15</td>
          <td className='tg-c3ow'>15</td>
        </tr>
        <tr>
          <td className='tg-0pky'>Saldo malattia non pagata </td>
          <td className='tg-c3ow'>0</td>
          <td className='tg-c3ow'>15</td>
          <td className='tg-c3ow'>15</td>
        </tr>
      </table>
    </div>
  );
}
