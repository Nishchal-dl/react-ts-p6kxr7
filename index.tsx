import React from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
import './index.css';
import Home from './page/Home';

const App = () => (
  <RecoilRoot>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Home />
    </React.Suspense>
  </RecoilRoot>
);

render(<App />, document.getElementById('root'));
