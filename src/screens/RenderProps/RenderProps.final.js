import React, { useState } from 'react';
import css from './RenderProps.module.scss';
import classNames from 'classnames';

const Switch = ({ isToggle, onClick }) => {
  const classes = classNames({
    [css.Toggle]: true,
    [css.IsToggled]: isToggle,
  });

  return (
    <div className={classes} onClick={onClick}>
      <div className={css.Toggler} />
    </div>
  );
};

const Toggle = ({ children }) => {
  const [isToggled, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!isToggled);
  };

  return children({ isToggle: isToggled, setToggle: toggle });
};

export const RenderProps = () => {
  return (
    <div>
      <Toggle>
        {({ isToggle, setToggle }) => (
          <>
            <Switch isToggle={isToggle} onClick={setToggle} />
            <button className={css.Button} onClick={setToggle}>
              Toggle
            </button>
          </>
        )}
      </Toggle>
    </div>
  );
};
