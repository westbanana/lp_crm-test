import React from 'react';

import style from './style.module.scss';

import TableRow from '../TableRow';

const TableContent = ({
  productsArray, setProductsArray, selectedItems, setSelectedItems,
}) => {
  const updateRow = (uuid, newValue) => {
    setProductsArray(prev => prev.reduce((acc, item) => {
      if (item.uuid === uuid) {
        acc.push({
          ...item,
          ...newValue,
        });
      } else {
        acc.push(item);
      }
      return acc;
    }, []));
  };

  const deleteRow = (uuid) => {
    setProductsArray(prev => prev.filter(item => item.uuid !== uuid));
  };

  const onItemClick = (uuid) => {
    setSelectedItems((prev) => {
      if (prev.some(itemUUID => itemUUID === uuid)) {
        return prev.filter(itemUUID => itemUUID !== uuid);
      }
      return [...prev, uuid];
    });
  };
  return (
    <div className={style.main}>
      {productsArray.map(product => (
        <TableRow
          isSelected={selectedItems.includes(product.uuid)}
          onItemClick={onItemClick}
          key={product.uuid}
          item={product}
          updateRow={updateRow}
          deleteRow={deleteRow}
        />
      ))}
    </div>
  );
};
export default TableContent;
