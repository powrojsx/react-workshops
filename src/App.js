import React from 'react';
import { Router } from '@reach/router';
import { Index } from './screens/Index/Index';
import { Navigation } from './components/Navigation/Navigation';
import { CompoundComponents } from './screens/CompoundComponents';
import { RenderProps } from './screens/RenderProps';

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
      </Router>
      <Navigation />
    </div>
  );
};
