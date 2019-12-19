import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Reset from './styles/reset';
import Routes from './routes';

/** COMPONENTS */
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
