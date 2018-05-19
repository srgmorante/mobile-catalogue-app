import React, { Component } from 'react';
import MobilesContainer from './app/containers/MobilesContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mobile Catalogue</h1>
        </header>
          <MobilesContainer />
      </div>
    );
  }
}

export default App;
