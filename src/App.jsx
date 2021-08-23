import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import store from './redux/store';

import UseStateCounter from './useState';
import UseRefCounter from './useRef';
import ReduxCounter from './redux'; 

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>React State Management</title>
        </Helmet>
        <UseStateCounter />
        <UseRefCounter />
        <Provider store={store}>
          <ReduxCounter />
        </Provider>
      </div>
    </HelmetProvider>
  );
}

export default App;
