import React, { useRef } from 'react';
import { useClickAway } from 'react-use';

import style from './style.module.scss';

import { ReactComponent as SelectedDot } from '../../assets/selectedItem.svg';

const Dropdown = ({
  isOpened,
  setIsOpened,
  productsOptions,
  selectProduct,
  selectedProducts,
}) => {
  const refDropDown = useRef();
  useClickAway(refDropDown, () => {
    setIsOpened(false);
  });
  return (isOpened && !!productsOptions.length && (
    <div
      ref={refDropDown}
      className={style.main}
    >
      {productsOptions.map(item => (
        <div
          key={item}
          onClick={() => selectProduct(item)}
          role="presentation"
          className={style.product}
        >
          <SelectedDot
            className={`${style.dot} ${selectedProducts.includes(item) && style.showDot}`}
          />
          <span className={style.productName}>
            {item}
          </span>
        </div>
      ))}
    </div>
  ));
};

export default Dropdown;
