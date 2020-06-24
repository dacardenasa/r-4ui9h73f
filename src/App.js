import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.copyText = this.copyText.bind(this);

    this.state = {
      text: ''
    }

  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.copyText} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }

  copyText(event){
    this.setState({
      text: event.target.value
    });
  }

}

export default App;
