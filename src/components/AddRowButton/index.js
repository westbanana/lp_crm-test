import React from 'react';

import style from './style.module.scss';

import { ReactComponent as ImageButton } from '../../assets/addRowButton.svg';
import uuid from '../../helpers/createUUID';

const AddRowButton = ({ setProductsArray }) => {
  const addRow = () => {
    setProductsArray(prev => (
      [{
        status: false,
        product: 'XXXX-',
        id: '',
        uuid: uuid(),
        productName: '',
        productImage: 'kyivstar',
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
