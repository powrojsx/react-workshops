import React from 'react';
import { ComparisionWrapper } from '../../components/ComparisionWrapper/ComparisionWrapper';
import { ReactHooks as ReactHooksBefore } from './ReactHooks';
import { ReactHooks as ReactHooksFinal } from './ReactHooks.final';

export const ReactHooks = () => {
  return (
    <>
      <h2 className='topic'>Temat: Sposoby na Hooki</h2>
      <ComparisionWrapper
        left={<ReactHooksBefore />}
        right={<ReactHooksFinal />}
      />
    </>
  );
};
