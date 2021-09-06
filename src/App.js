import React from 'react'
import { Route } from 'react-router-dom';

import './App.css';
import Detail from './components/detail'
import Home from './components/home';
import Header from './components/header';
function App() {


  return (
    <div className="App">

      {/* <Header></Header> */}
      <Route path='/detail' component={Detail} exact />
      <Route path='/' component={Home} exact />


    </div>
  );
}

export default App;
