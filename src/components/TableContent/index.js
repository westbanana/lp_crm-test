import React from 'react';

import style from './style.module.scss';
import TableRow from '../TableRow';

const TableContent = ({ arr }) => (
  <div className={style.main}>
    {arr.map((product, index) => (
      <TableRow item={product} indexElement={index} />
    ))}
  </div>
);

export default TableContent;
