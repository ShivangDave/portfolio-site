import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

import App from './Components/App';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-77153305-2');
ReactGA.pageview('Homepage');

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
