import React, { useState } from 'react';

import style from './style.module.scss';

import TableColumnNameDropdown from '../TableColumnNameDropdown';
import { ReactComponent as DropDownArrow } from '../../assets/dropdownArrow.svg';

const TableColumnName = ({ name, products }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={style.main}>
      <span className={style.columnName}>{name}</span>
      <div className={style.inputBlock}>
        <input
          onClick={() => setIsOpened(true)}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          type="text"
        />
        <DropDownArrow
          onClick={() => setIsOpened(!isOpened)}
          className={isOpened
            ? style.dropdownArrowOpened
            : style.dropdownArrowClosed}
        />
        <TableColumnNameDropdown
          products={products}
          setIsOpened={setIsOpened}
          isOpened={isOpened}
        />
      </div>
    </div>
  );
};

export default TableColumnName;
