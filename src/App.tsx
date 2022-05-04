import React from 'react';
import logo from './logo.svg';
import './App.css';
import ModalForm from "./components/ModalForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ModalForm />
      </header>
    </div>
  );
}

export default App;
