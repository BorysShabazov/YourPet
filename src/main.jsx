import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import AxiosInterceptor from './components/Auth/AxiosInterceptor.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AxiosInterceptor>
          <BrowserRouter basename="/YourPet/">
            <App />
          </BrowserRouter>
        </AxiosInterceptor>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
