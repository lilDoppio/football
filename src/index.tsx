import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { rootTheme } from './style/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={rootTheme}>
    <App />
  </ThemeProvider>
);