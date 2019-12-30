import React from 'react';

export default function Table5() {
  const style = {
    position: 'absolute',
    top: '75%',
    left: '67%',
    width: '268px',
    height: '130px ',
    fontSize: '9.5px'
  };
  return (
    <div style={style}>
      <table className='table is-bordered'>
        <tr>
          <th className='tg-0pky'>PERMESSO str: donzione sargue</th>
          <th className='tg-c3ow'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;
          </th>
          <th className='tg-c3ow'>
            &nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;
          </th>
          <th className='tg-c3ow'>
            &nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;
          </th>
        </tr>
        <tr>
          <td className='tg-0pky'>PERMESSO str: dirritto di voto</td>
          <td className='tg-c3ow'>0</td>
          <td className='tg-c3ow'>2</td>
          <td className='tg-c3ow'>2</td>
        </tr>
        <tr>
          <td className='tg-0pky'>PERMESSO str: testimone g</td>
          <td className='tg-c3ow'>0</td>
          <td className='tg-c3ow'>1</td>
          <td className='tg-c3ow'>1</td>
        </tr>
        <tr>
          <td className='tg-0lax'>PERMESSO str: seggio elettorale</td>
          <td className='tg-baqh'>0</td>
          <td className='tg-baqh'>3</td>
          <td className='tg-baqh'>3</td>
        </tr>
      </table>
    </div>
  );
}
