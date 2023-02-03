import React, { useMemo, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import style from './style.module.scss';

import { images } from '../../consts';

const SelectRowImage = ({ disabled, value, onChange }) => {
  const selectedImage = useMemo(() => images.find(e => e.value === value), [value]);
  const [isOpened, setIsOpened] = useState(false);
  const refProductImage = useRef();
  useClickAway(refProductImage, () => {
    setIsOpened(false);
  });
  const handleChange = (item) => {
    onChange(item.value);
    setIsOpened(false);
  };
  const openModal = (e) => {
    e.stopPropagation();
    if (!disabled) {
      setIsOpened(!isOpened);
    }
  };
  return (
    <div
      ref={refProductImage}
      className={style.main}
    >
      <div
        role="presentation"
        onClick={openModal}
        className={style.selectedImage}
      >
        {selectedImage.icon}
      </div>
      {isOpened && (
        <div className={style.imagesList}>
          {images.map(item => (
            <div
              key={item.value}
              role="presentation"
              className={style.imagesListItem}
              onClick={() => handleChange(item)}
            >
              {item.icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectRowImage;
