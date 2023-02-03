import React, { useState } from 'react';

import style from './App.module.scss';
import TableHeader from './components/TableHeader';
import TableContent from './components/TableContent';

const App = () => {
  const [productsArray, setProductsArray] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(productsArray);
  return (
    <div className={style.App}>
      <TableHeader
        productsArray={productsArray}
        setProductsArray={setProductsArray}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <TableContent
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        setProductsArray={setProductsArray}
        productsArray={productsArray}
      />
    </div>
  );
};

export default App;
