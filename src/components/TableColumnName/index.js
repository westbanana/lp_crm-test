import React, { useState } from 'react';

import style from './style.module.scss';

import TableColumnNameDropdown from '../TableColumnNameDropdown';
import { ReactComponent as DropDownArrow } from '../../assets/dropdownArrow.svg';

const TableColumnName = ({ name }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className={style.main}>
      <span className={style.columnName}>{name}</span>
      <div className={style.inputBlock}>
        <input type="text" />
        <DropDownArrow
          onClick={() => setIsOpened(!isOpened)}
          className={isOpened ? style.dropdownArrowOpened : style.dropdownArrowClosed}
        />
      </div>
      <TableColumnNameDropdown isOpened={isOpened} />
    </div>
  );
};

export default TableColumnName;
