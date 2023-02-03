import React from 'react';
import style from './style.module.scss';

const TableRow = ({ item, index }) => {
  const test = () => console.log(index);
  console.log(index);
  return (
    <div className={style.main}>
      <div className={style.inputStatusBlock}>
        <input onClick={test} type="checkbox" />
      </div>
      <span className={style.itemProduct}>{item.product}</span>
      <input
        className={`${style.inputId} ${!item.id && style.emptyField}`}
        placeholder={item.id}
      />
      <div className={`${style.inputProductNameBlock}  ${!item.productName && style.emptyField}`}>
        <span className={style.productImage}>{item.productImage}</span>
        <input placeholder={item.productName} />
      </div>
    </div>
  );
};

export default TableRow;
