import React from 'react';
import './SecondPage.css';

import NameBox from './NameBox';
import DataOggi from './DataOggi';
import Statement from './Statement';
import Totale from './Totale';
import Totale2 from './Totale2';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import Table5 from './Table5';

export default function secondPage() {
  return (
    <div className='SecondPageContainer'>
      <NameBox />
      <DataOggi />
      <Statement />
      <Totale />
      <Totale2 />
      <Table1 />
      <Table2 />
      <Table3 />
      <Table4 />
      <Table5 />
      <div className='firstSpace'></div>
      <div className='secondSpace'></div>
      <div className='thirdSpace'></div>
    </div>
  );
}
