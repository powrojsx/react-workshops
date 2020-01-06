import React from 'react';
import { Router } from '@reach/router';
import { Index } from './screens/Index/Index';
import { Navigation } from './components/Navigation/Navigation';
import { CompoundComponents } from './screens/CompoundComponents';
import { RenderProps } from './screens/RenderProps';
import { ReactHooks } from './screens/ReactHooks';
import { Context } from './screens/ReactContext';

export const App = (props) => {
  return (
    <div className='container'>
      <h1 className='main__heading'>
        Noworoczne warsztaty z React{' '}
        <span role='img' aria-label='fireworks'>
          🎇
        </span>
      </h1>
      <Router>
        <Index path='/' />
        <CompoundComponents path='/1'></CompoundComponents>
        <RenderProps path='/2'></RenderProps>
        <ReactHooks path='/3'></ReactHooks>
        <Context path='/4'></Context>
      </Router>
      <Navigation />
    </div>
  );
};
