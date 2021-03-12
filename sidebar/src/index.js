import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';
import { AppProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
