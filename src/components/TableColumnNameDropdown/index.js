import React from 'react';

import style from './style.module.scss';

const arr = [1, 2, 3, 4, 5, 6, 7];

const Dropdown = ({ isOpened }) => {
  console.log('isOpened', isOpened);
  return (
    <div
      style={{ display: 'none' }}
      className={style.main}
    >
      {arr.map(e => (
        <span>{e}</span>
      ))}
    </div>
  );
};

export default Dropdown;
