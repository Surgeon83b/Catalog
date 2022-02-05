import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './Components/AppRouter';
import MyNavPanel from './Components/MyNavPanel';

function App() {
  return (
    <div className="App">
      <BrowserRouter path='/'>
        
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
