import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import './HermeneusOne-Regular.ttf'

import { ShoppingCardProvider } from './Context/ShoppingCartContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <HashRouter basename={window.location.pathname || ''}>
      <ShoppingCardProvider>
        <PayPalScriptProvider>
          <App />
        </PayPalScriptProvider>
      </ShoppingCardProvider>
    </HashRouter>
);