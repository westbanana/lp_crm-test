import React from 'react';

import style from './style.module.scss';

import TableColumnName from '../TableColumnName';
import AddRowButton from '../AddRowButton';
import RemoveRowsButton from '../RemoveRowsButton';

const TableHeader = ({ setTestProductsArray }) => (
  <div className={style.main}>
    <TableColumnName name="Статус" />
    <TableColumnName name="Товар" />
    <TableColumnName name="ID" />
    <TableColumnName name="Название" />
    <div className={style.buttonsContainer}>
      <AddRowButton setTestProductsArray={setTestProductsArray} />
      <RemoveRowsButton />
    </div>
  </div>
);

export default TableHeader;
