import React, { useState, useMemo } from 'react';

import style from './style.module.scss';

import TableColumnNameDropdown from '../TableColumnNameDropdown';
import { ReactComponent as DropDownArrow } from '../../assets/dropdownArrow.svg';

const TableColumnName = ({ name, products }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const selectProduct = (product) => {
    if (product === 'Все') {
      setSelectedProducts([]);
    } else if (!selectedProducts.includes(product)) {
      setSelectedProducts(prev => [...prev, product]);
    } else {
      setSelectedProducts(prev => prev.filter(item => item !== product));
    }
  };

  const productsOptions = useMemo(() => [
    'Все',
    ...products.reduce((acc, item) => {
      if (!acc.includes(item.productName)) {
        acc.push(item.productName);
      }
      return acc;
    }, []),
  ], [products]);

  const inputOnFocus = () => {
    setIsFocused(true);
    setIsOpened(true);
  };

  const inputOnBlur = () => {
    setIsFocused(false);
  };

  const displayOptions = useMemo(() => {
    if (!inputValue) {
      return productsOptions;
    }
    return productsOptions.filter(item => item.toLowerCase().includes(inputValue.trim().toLowerCase()));
  }, [productsOptions, inputValue]);

  return (
    <div className={style.main}>
      <span className={style.columnName}>{name}</span>
      {name === 'Название' && (
        <div className={style.inputBlock}>
          <input
            onBlur={inputOnBlur}
            onFocus={inputOnFocus}
            onClick={() => setIsOpened(true)}
            value={isFocused ? inputValue : selectedProducts.toString()}
            onChange={e => setInputValue(e.target.value)}
            type="text"
          />
          <DropDownArrow
            onClick={() => setIsOpened(!isOpened)}
            className={isOpened
              ? style.dropdownArrowOpened
              : style.dropdownArrowClosed}
          />
          <TableColumnNameDropdown
            selectedProducts={selectedProducts}
            selectProduct={selectProduct}
            productsOptions={displayOptions}
            setIsOpened={setIsOpened}
            isOpened={isOpened}
          />
        </div>
      )}
    </div>
  );
};

export default TableColumnName;
