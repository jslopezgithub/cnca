import React from 'react';
import 'bulma/css/bulma.css';

export default function TotalTime() {
  return (
    <div
      style={{
        position: 'absolute',
        justifyContent: 'space-around',
        top: '0%',
        right: '2.1%',
        width: '31%',
        fontSize: 8
      }}
      className='tablesizing table__wrapper maintable  table-cell-border content is-small '
    >
      <table className='tablesizing table is-bordered pricing__table is-small'>
        <tr>
          <th className='tg-a46p is-light'>ORE ATTITVITA</th>
          <th className='tg-0pky '>0:00:00</th>
          <th className='tg-0pky'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </th>
          <th className='tg-0pky is-warning'>0:00</th>
        </tr>
        <tr>
          <td className='tg-xgic is-danger'>MALATTIA</td>
          <td className='tg-0pky'>0:00</td>
          <td className='tg-0pky'></td>
          <td className='tg-0pky is-warning'>0:00</td>
        </tr>
        <tr>
          <td className='tg-wf0n is-info'>FERIE</td>
          <td className='tg-0pky'>0:00</td>
          <td className='tg-0pky'></td>
          <td className='tg-0pky is-warning'>0:00</td>
        </tr>
        <tr>
          <td className='tg-yal4 is-success'>PREMESSI STR</td>
          <td className='tg-0pky'>0:00</td>
          <td className='tg-0pky'></td>
          <td className='tg-0pky is-success'>0:00</td>
        </tr>
        <tr>
          <td className='tg-yal4 is-warning'>FORMAZIONE</td>
          <td className='tg-0pky font'>0:00</td>
          <td className='tg-0pky'></td>
          <td className='tg-0pky is-success'>0:00</td>
        </tr>
        <tr>
          <td
            style={{
              position: 'absolute',
              justifyContent: 'space-around',
              width: '260px',
              right: '.02%',
              textAlign: 'center',
              fontSize: 10,
              border: 'solid green .1px'
            }}
            className='tg-0pky is-success totalHoursInbox'
          >
            0:00
          </td>
        </tr>
      </table>
    </div>
  );
}
