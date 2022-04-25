import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './Components/AppRouter';
import { getData } from './utils/pages';
import { MyContext } from './context/MyContext';
import { setInitRank } from './utils/common';

function App() {

  const [list, setList] = useState([]);
  useEffect(() => {
    getData('/Data.json', setList);
  }, [])

  useEffect(() => {
    setInitRank(list);
    // console.log('ls-App', JSON.stringify(setRankMas(list.length)))

  }, [list])

  console.log('App', list);

  return (
    <MyContext.Provider value={list} >
      <div className="App">
        <BrowserRouter path='/'>
          <AppRouter />
        </BrowserRouter>
      </div>
    </MyContext.Provider >
  );
}

export default App;
