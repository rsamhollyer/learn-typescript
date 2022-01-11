import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todos todos={['Learn React', 'Learn Typescript']} />
    </div>
  );
}

export default App;
