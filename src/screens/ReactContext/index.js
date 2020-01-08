import React from 'react';
import { ComparisionWrapper } from '../../components/ComparisionWrapper/ComparisionWrapper';
import { Context as ContextFinal } from './Context.final';
import { Context as ContextBefore } from './Context.before';

export const Context = () => {
  return (
    <>
      <h2 className='topic'>Temat: React Context</h2>
      <ComparisionWrapper left={<ContextBefore />} right={<ContextFinal />} />
    </>
  );
};
