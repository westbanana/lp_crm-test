import React from 'react';

import style from './style.module.scss';

import { ReactComponent as ImageButton } from '../../assets/removeRowsButton.svg';

const AddRowButton = ({
  selectedItems, setProductsArray, productsArray, setSelectedItems,
}) => {
  const removeSelectedItems = () => {
    setProductsArray(
      productsArray.reduce((productsAcc, product) => {
        if (!selectedItems.includes(product.uuid)) {
          productsAcc.push(product);
        }
        return productsAcc;
      }, []),
    );
    setSelectedItems([]);
  };
  return (
    <ImageButton
      role="presentation"
      onClick={removeSelectedItems}
      className={style.image}
    />
  );
};

export default AddRowButton;
