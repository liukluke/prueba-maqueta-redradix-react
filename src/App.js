import React, { Component } from 'react'
import './styles/styles.css'
import Home from './components/home/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false 
    }
  }

  mobileMenu() {
    this.setState({
      ...this.state,
      active: !this.state.active
    }, () => {
      console.log(this.state.active)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="app-wrapper">
          <Home active={this.state.active} mobileMenu={()=> this.mobileMenu()} />
        </div>
      </div>
    )
  }
}

export default App
