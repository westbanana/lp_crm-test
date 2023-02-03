import React from 'react';

import style from './style.module.scss';

import { ReactComponent as ImageButton } from '../../assets/addRowButton.svg';

const AddRowButton = ({ setTestProductsArray }) => {
  const addRow = () => {
    setTestProductsArray(prev => (
      [{
        status: false,
        product: 'XXXX',
        id: null,
        productName: '',
        productImage: '?',
      }, ...prev]
    ));
  };
  return (
    <ImageButton
      role="presentation"
      onClick={addRow}
      className={style.image}
    />
  );
};

export default AddRowButton;
