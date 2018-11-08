import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todoajax from './component/ajax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Using Ajax</h1>
        <Todoajax />
      </div>
    );
  }
}

export default App;
