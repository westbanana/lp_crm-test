import React, { useRef } from 'react';
import { useClickAway } from 'react-use';

import style from './style.module.scss';

const Dropdown = ({ isOpened, setIsOpened, products }) => {
  const refDropDown = useRef();
  useClickAway(refDropDown, () => {
    setIsOpened(false);
  });
  return (isOpened && (
    <div
      ref={refDropDown}
      className={style.main}
    >
      {products.map(e => (
        <span key={e.uuid}>{e.productName}</span>
      ))}
    </div>
  ));
};

export default Dropdown;
