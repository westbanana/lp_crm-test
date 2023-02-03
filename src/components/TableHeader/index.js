import React from 'react';

import style from './style.module.scss';

import TableColumnName from '../TableColumnName';
import AddRowButton from '../AddRowButton';
import RemoveRowsButton from '../RemoveRowsButton';

const TableHeader = ({
  selectedItems, setSelectedItems, productsArray, setProductsArray,
}) => (
  <div className={style.main}>
    <TableColumnName
      products={productsArray}
      name="Статус"
    />
    <TableColumnName
      products={productsArray}
      name="Товар"
    />
    <TableColumnName
      products={productsArray}
      name="ID"
    />
    <TableColumnName
      products={productsArray}
      name="Название"
    />
    <div className={style.buttonsContainer}>
      <AddRowButton setProductsArray={setProductsArray} />
      {!!selectedItems.length && (
        <RemoveRowsButton
          productsArray={productsArray}
          setProductsArray={setProductsArray}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      )}
    </div>
  </div>
);

export default TableHeader;
