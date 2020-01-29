/* eslint-disable eqeqeq */
/* eslint-disable valid-typeof */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React from 'react';
import 'bulma/css/bulma.css';

export default function TotalTime(props) {
  const id = props.totalTimeDaily;
  console.log(id.totalTime);
  // eslint-disable-next-line eqeqeq
  function checkingTypeAttivi(dataType) {
    if (dataType) {
      const num = Object.values(dataType.activity_type_id)[0];
      return num == 3 || num == 2 || num == 1 ? dataType.totalTime : '00:00';
    }
  }

  function checkingTypePerm(dataType) {
    if (dataType) {
      const num = Object.values(dataType.activity_type_id)[0];
      return num == 10 || num == 11 || num == 12 || num == 13
        ? dataType.totalTime
        : '00:00';
    }
  }

  function checkingTypeFerm(dataType) {
    if (dataType) {
      const num = Object.values(dataType.activity_type_id)[0];
      return num == 7 || num == 8 || num == 9 ? dataType.totalTime : '00:00';
    }
  }
  const ATTITVITA = checkingTypeAttivi(id);
  console.log(ATTITVITA);
  const PERMES = checkingTypePerm(id);
  console.log(PERMES);
  const FORM = checkingTypeFerm(id);
  const FERI =
    id && Object.values(id.activity_type_id)[0] == 4 ? id.totalTime : '00:00';
  const MALAT =
    id && Object.values(id.activity_type_id)[0] == 5 ? id.totalTime : '00:00';

  return (
    <div
      style={{
        position: 'absolute',
        justifyContent: 'space-around',
        top: '63%',
        right: '16%',
        width: '70%',
        fontSize: 15
      }}
      className="tablesizing table__wrapper maintable  table-cell-border content is-large "
    >
      <table className="tablesizing table is-bordered pricing__table is-large">
        <tr>
          <th className="tg-a46p is-light">ORE ATTITVITA</th>

          <th className="tg-0pky">{!ATTITVITA ? '00:00' : ATTITVITA}</th>

          <th className="tg-0pky">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </th>
          <th className="tg-0pky is-warning">
            {!ATTITVITA ? '00:00' : ATTITVITA}
          </th>
        </tr>
        <tr>
          <td className="tg-xgic is-danger">MALATTIA</td>
          <td className="tg-0pky">{!MALAT ? '00:00' : MALAT}</td>
          <td className="tg-0pky"></td>
          <td className="tg-0pky is-warning">{!MALAT ? '00:00' : MALAT}</td>
        </tr>
        <tr>
          <td className="tg-wf0n is-info">FERIE</td>
          <td className="tg-0pky"> {!FERI ? '00:00' : FERI}</td>
          <td className="tg-0pky"></td>
          <td className="tg-0pky is-warning">{!FERI ? '00:00' : FERI}</td>
        </tr>
        <tr>
          <td className="tg-yal4 is-success">PREMESSI STR</td>
          <td className="tg-0pky">{!PERMES ? '00:00' : PERMES}</td>
          <td className="tg-0pky"></td>
          <td className="tg-0pky is-success">{!PERMES ? '00:00' : PERMES}</td>
        </tr>
        <tr>
          <td className="tg-yal4 is-warning">FORMAZIONE</td>
          <td className="tg-0pky font">{!FORM ? '00:00' : FORM}</td>
          <td className="tg-0pky"></td>
          <td className="tg-0pky is-success">{!FORM ? '00:00' : FORM}</td>
        </tr>
        <tr>
          <td
            style={{
              position: 'absolute',
              justifyContent: 'space-around',
              width: '100%',
              right: '.02%',
              textAlign: 'center',
              fontSize: 10,
              border: 'solid green .1px'
            }}
            className="tg-0pky is-success totalHoursInbox"
          >
            0:00
          </td>
        </tr>
      </table>
    </div>
  );
}
