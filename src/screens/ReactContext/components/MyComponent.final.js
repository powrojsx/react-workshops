import React from 'react';
import { Consumer } from '../context';
import { InputComponent } from './InputComponent.final';

export const MyComponent = () => {
  return (
    <Consumer>
      {({ state, setState }) => {
        return (
          <>
            <p>State:</p>
            <pre className='codeblock'>{JSON.stringify(state, null, 2)}</pre>
            Change state from child component:{' '}
            <button
              className='button'
              onClick={() => setState({ ...state, clickedFromConsumer: true })}
            >
              Change state
            </button>
            <InputComponent />
          </>
        );
      }}
    </Consumer>
  );
};
