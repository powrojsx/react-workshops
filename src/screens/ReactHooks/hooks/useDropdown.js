import React, { useState } from 'react';
import classNames from 'classnames';

export const useDropdown = (values, displayBy) => {
  const [isOpen, toggleDropdown] = useState(false);
  const [value, selectValue] = useState(values[0]);

  const classes = classNames({
    dropdown: true,
    'dropdown--open': isOpen,
  });

  const resetValue = () => {
    selectValue(values[0]);
  };

  const Dropdown = () => (
    <div className={classes} onClick={() => toggleDropdown(!isOpen)}>
      {value[displayBy]}
      <ul className='dropdown__list'>
        {values.map((item, index) => {
          return (
            <li
              className='dropdown__item'
              key={index}
              onClick={() => selectValue(item)}
            >
              {item[displayBy]}
            </li>
          );
        })}
      </ul>
    </div>
  );

  const ResetButton = () => (
    <button className='button' onClick={resetValue}>
      Reset
    </button>
  );

  return [Dropdown, value, resetValue, ResetButton];
};
