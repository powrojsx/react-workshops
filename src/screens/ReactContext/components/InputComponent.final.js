import React from 'react';
import { Consumer } from '../context';

export const InputComponent = () => (
  <Consumer>
    {({ state, setState }) => {
      const changeInputValue = (event) => {
        setState({ ...state, inputValue: event.target.value });
      };

      return (
        <input
          type='text'
          className='input'
          onChange={changeInputValue}
          placeholder='Input something...'
        ></input>
      );
    }}
  </Consumer>
);
