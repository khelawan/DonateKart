import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import List from './components/list';
import { Button, Navbar } from 'react-bootstrap'
import MyComponent from './components/api'
import CharacterDropDown from './components/list'


function App() {
  const [currency, setCurrencey] = useState("INR");
  return (
    <div className="App">
      <Header/>
      <CharacterDropDown currency={currency} setCurrencey={setCurrencey}/>
       <MyComponent currency={currency}/>
    </div>
  );
}

export default App;
