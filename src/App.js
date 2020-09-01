import React from 'react';
import './App.css';
import Table from './components/Table';
import ContextProvider from './context/StarWarsContext';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Table />
      </ContextProvider>
    </div>
  );
}

export default App;
