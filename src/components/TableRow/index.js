import React from 'react';

import style from './style.module.scss';

import { ReactComponent as RemoveRow } from '../../assets/removeRow.svg';
import Switch from '../Switch';
import SelectRowImage from '../SelectRowImage';

const TableRow = ({
  item,
  updateRow,
  deleteRow,
  onItemClick,
  isSelected,
}) => {
  const onChangeInput = (e, fieldKey) => {
    updateRow(item.uuid, { [fieldKey]: e.target.value });
  };

  const onChangeField = (newValue, fieldKey) => {
    updateRow(item.uuid, { [fieldKey]: newValue });
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
        <Switch
          onChange={newValue => onChangeField(newValue, 'status')}
          value={item.status}
        />
      </div>
      <span className={style.itemProduct}>{item.product}</span>
      <input
        onClick={stopPropagation}
        type="number"
        disabled={item.status}
        autoFocus
        onChange={e => onChangeInput(e, 'id')}
        className={`${style.inputRow} ${!item.id && style.emptyField}`}
        value={item.id}
      />
      <div className={style.inputProductNameBlock}>
        <SelectRowImage
          disabled={item.status}
          value={item.productImage}
          onChange={newValue => onChangeField(newValue, 'productImage')}
        />
        <input
          disabled={item.status}
          onClick={stopPropagation}
          className={`${style.inputRow} ${!item.productName && style.emptyField}`}
          onChange={e => onChangeInput(e, 'productName')}
          value={item.productName}
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
