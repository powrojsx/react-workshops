import React from 'react';
import { css } from './CompoundComponents.module.scss';
import { ComparisionWrapper } from '../../components/ComparisionWrapper/ComparisionWrapper';
import { CompoundComponents as CompoundComponentsBefore } from './CompoundComponents';
import { CompoundComponents as CompoundComponentsFinal } from './CompoundComponents.final';

export const CompoundComponents = () => {
  return (
    <>
      <h2 className='topic'>Temat: Compound Components</h2>
      <ComparisionWrapper
        left={
          <CompoundComponentsBefore
            options={['banana', 'apple', 'orange', 'watermelon']}
            defaultValue='orange'
          />
        }
        right={
          <>
            <CompoundComponentsFinal
              options={['banana', 'apple', 'orange', 'watermelon']}
              defaultValue='orange'
            >
              <CompoundComponentsFinal.SelectedValue />
              <CompoundComponentsFinal.ResetButton />
            </CompoundComponentsFinal>
          </>
        }
      />
    </>
  );
};
