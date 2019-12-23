import React from 'react';
import { Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
/** REDUX */
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import history from './services/history';
import store from './store';
import Reset from './styles/reset';
import Routes from './routes';

/** COMPONENTS */
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ToastContainer autoClose={3000} />
        <Reset />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
