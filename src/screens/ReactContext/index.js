import React from 'react';
import { ComparisionWrapper } from '../../components/ComparisionWrapper/ComparisionWrapper';
import { Context as ContextFinal } from './Context.final';

export const Context = () => {
  return (
    <>
      <h2 className='topic'>Temat: Render props / Function as a child</h2>
      <ComparisionWrapper right={<ContextFinal />} />
    </>
  );
};
