import React, { useState } from 'react';
import { Provider } from './context';
import { MyComponent } from './components/MyComponent.final';

export const Context = () => {
  const [state, setState] = useState({});

  return (
    <Provider
      value={{
        state,
        setState,
      }}
    >
      Change state from root component:{' '}
      <button
        className='button'
        onClick={() => setState({ ...state, isClicked: true })}
      >
        Change state
      </button>
      <br />
      <MyComponent />
    </Provider>
  );
};
