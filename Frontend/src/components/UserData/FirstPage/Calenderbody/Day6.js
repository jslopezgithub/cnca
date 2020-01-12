import React from 'react';
import './Calenderbody.css';
import './Day6.css';

export default function App() {
  const date = '10/10';
  const totalTime = '0:00';
  const day = "MERCOLEDI'";
  return (
    <div className='mainContainer6'>
      {/* ______________________________ day */}
      <span className='day'>
        <p className='dayp'>{day}</p>
      </span>

      {/* ______________________________ date */}
      <span className='date'>
        <p className='datep'>{date}</p>
      </span>
      {/* ______________________________ riposo */}

      <div className='dropdown'>
        <i className='riposoIcon fas fa-ellipsis-v'></i>
        <div className='dropdown-content'>
          <p>-----</p>
          <p>Riposo</p>
        </div>
      </div>
      {/* _____________________________ingresso */}
      <span className='ingresso'>
        <span className='ingressop'>
          <p className='ingressop'>1</p>
          <p className='ingressop'>2</p>
          <p>3</p>
        </span>
      </span>
      {/* _____________________________ingresso time box */}
      <span className='time'>
        <input
          className='timep1'
          type='time'
          min='06:00'
          max='18:00'
          value='8:00'
          required
        />
        <input
          className='timep2'
          type='time'
          min='06:00'
          max='18:00'
          value='8:00'
          required
        />
        <input
          className='timep3'
          type='time'
          min='06:00'
          max='18:00'
          value='8:00'
          required
        />
      </span>
      {/* _____________________________Usicta */}
      <span className='uscita'>
        <input
          className='uscitap1'
          type='time'
          min='06:00'
          max='18:00'
          value='8:00'
          required
        />
        <input
          className='uscitap2'
          type='time'
          min='06:00'
          max='18:00'
          value='8:00'
          required
        />
        <input
          className='uscitap3'
          type='time'
          min='06:00'
          max='18:00'
          value='8:00'
          required
        />
      </span>
      {/* -----------------------------------------------------------Ingresso */}
      <span className='TotalTimeContainer'>
        <p className='totalTime'>{totalTime}</p>
        <p className='totalTime'>{totalTime}</p>
        <p className='totalTime3'>{totalTime}</p>
      </span>

      {/* ----------------------------------------------------------------selezionare */}
      <span className='selezionare'>
        <span className='firstbox'>
          <i className='fas fa-caret-square-down'></i>
          <p className='contentParagaph'>attivita1</p>
        </span>
        <span className='secondbox'>
          <i className='fas fa-caret-square-down'></i>
          <p className='contentParagaph'>attivita2</p>
        </span>
        <span className='thirdbox'>
          <i className='fas fa-caret-square-down'></i>
          <p className='contentParagaph'>attivita3</p>
        </span>
      </span>
    </div>
  );
}
