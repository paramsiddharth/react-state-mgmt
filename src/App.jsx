import React from 'react';
import logo from './logo.svg';
import './App.css';

import UseStateCounter from './useState';
import UseRefCounter from './useRef';

function App() {
  document.title = 'React State Management';

  return (
    <div className="App">
      <UseStateCounter />
      <UseRefCounter />
    </div>
  );
}

export default App;
