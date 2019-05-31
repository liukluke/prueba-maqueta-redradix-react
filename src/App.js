import React, { Component } from 'react'
import './styles/styles.css'
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-wrapper">
          <Home />
        </div>
      </div>
    )
  }
}

export default App
