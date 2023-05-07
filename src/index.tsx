import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import Router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
