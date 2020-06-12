import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import App from './Components/App';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-77153305-2');
ReactGA.pageview('Homepage');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
