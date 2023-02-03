import React from 'react';

import style from './style.module.scss';

import { ReactComponent as ImageButton } from '../../assets/removeRowsButton.svg';

const AddRowButton = () => (
  <ImageButton className={style.image} />
);

export default AddRowButton;
