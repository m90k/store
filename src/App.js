import React from 'react';
import { BrowserRouter } from 'react-router-dom';
/** REDUX */
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';
import Reset from './styles/reset';
import Routes from './routes';

/** COMPONENTS */
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
