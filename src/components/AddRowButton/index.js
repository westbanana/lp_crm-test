import React from 'react';

import style from './style.module.scss';

import { ReactComponent as ImageButton } from '../../assets/addRowButton.svg';
import uuid from '../../helpers/createUUID';

const AddRowButton = ({ setProductsArray }) => {
  const addRow = () => {
    setProductsArray(prev => (
      [{
        status: false,
        product: 'XXXX',
        id: null,
        uuid: uuid(),
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
