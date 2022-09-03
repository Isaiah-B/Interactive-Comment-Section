import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';

import { GlobalStyle } from './index.styles';
import { UserProvider } from './context/user.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <UserProvider>
          <App />
        </UserProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
