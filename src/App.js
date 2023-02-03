import React, { useState } from 'react';

import style from './App.module.scss';
import TableHeader from './components/TableHeader';
import TableContent from './components/TableContent';

const App = () => {
  const [testProductsArray, setTestProductsArray] = useState([]);
  console.log(testProductsArray);
  return (
    <div className={style.App}>
      <TableHeader
        setTestProductsArray={setTestProductsArray}
      />
      <TableContent
        arr={testProductsArray}
      />
    </div>
  );
};

export default App;
