import React from 'react';

import style from './style.module.scss';

import { ReactComponent as RemoveRow } from '../../assets/removeRow.svg';

const TableRow = ({
  item,
  updateRow,
  deleteRow,
  onItemClick,
  isSelected,
}) => {
  const onChangeValue = (e, fieldKey) => {
    updateRow(item.uuid, { [fieldKey]: e.target.value });
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const removeRow = (e) => {
    e.stopPropagation();
    deleteRow(item.uuid);
  };
  return (
    <div
      role="presentation"
      onClick={() => onItemClick(item.uuid)}
      className={`${style.main} ${isSelected && (style.selectedItem)}`}
    >
      <div className={style.inputStatusBlock}>
        <input
          onClick={stopPropagation}
          type="checkbox"
        />
      </div>
      <span className={style.itemProduct}>{item.product}</span>
      <input
        onClick={stopPropagation}
        type="number"
        autoFocus
        onChange={e => onChangeValue(e, 'id')}
        className={`${style.inputRow} ${!item.id && style.emptyField}`}
        placeholder={item.id}
      />
      <div className={style.inputProductNameBlock}>
        <span className={style.productImage}>{item.productImage}</span>
        <input
          onClick={stopPropagation}
          className={`${style.inputRow} ${!item.productName && style.emptyField}`}
          onChange={e => onChangeValue(e, 'productName')}
          placeholder={item.productName}
        />
      </div>
      <RemoveRow
        className={style.removeRowButton}
        role="presentation"
        onClick={removeRow}
      />
    </div>
  );
};

export default TableRow;
