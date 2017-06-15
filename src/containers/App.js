import React, { Component } from 'react';
import '../styles/App.css';
import Editor from './Editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Default Html-Css editor with live render</h2>
        </div>
        <Editor />
      </div>
    );
  }
}

export default App;
