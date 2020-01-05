import React from 'react';
import { ComparisionWrapper } from '../../components/ComparisionWrapper/ComparisionWrapper';
import { RenderProps as RenderPropsBefore } from './RenderProps';
import { RenderProps as RenderPropsFinal } from './RenderProps.final';

export const RenderProps = () => {
  return (
    <>
      <h2 className='topic'>Temat: Render props / Function as a child</h2>
      <ComparisionWrapper
        left={<RenderPropsBefore />}
        right={<RenderPropsFinal />}
      />
    </>
  );
};
