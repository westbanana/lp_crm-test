import React from 'react';

import style from './style.module.scss';

const Switch = ({ value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange(target.checked);
  };
  return (
    <label className={style.switch}>
      <input
        checked={value}
        onChange={handleChange}
        type="checkbox"
      />
      <span className={style.slider} />
    </label>
  );
};

export default Switch;
