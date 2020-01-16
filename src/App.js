import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Container } from '@material-ui/core';
import Category from './components/Category/Category';
import Nav from './components/Nav/Nav';
// import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Nav />
        {/* <Header /> */}
       <div>
         
         <Category />
         
       </div>
    </div>
  );
}

export default App;
