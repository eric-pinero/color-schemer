import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorList from './components/colorList';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to color-schemer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ColorList/>
    </div>
  );
}

export default App;
