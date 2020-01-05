import React from 'react';
import css from './RenderProps.module.scss';
import classNames from 'classnames';

const Switch = ({ isToggle }) => {
  const classes = classNames({
    [css.Toggle]: true,
    [css.IsToggled]: isToggle,
  });

  return (
    <div className={classes}>
      <div className={css.Toggler} />
    </div>
  );
};

const Toggle = ({ children }) => {
  return children;
};

export const RenderProps = () => {
  return (
    <div>
      <Toggle>
        <Switch />
      </Toggle>
    </div>
  );
};
