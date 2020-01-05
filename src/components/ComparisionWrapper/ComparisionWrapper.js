import React from 'react';
import css from './ComparisionWrapper.module.scss';

export const ComparisionWrapper = ({ left, right }) => {
  return (
    <div className={css.ComparisionWrapper}>
      <div className={css.Left}>{left}</div>
      <div className={css.Right}>{right}</div>
    </div>
  );
};
