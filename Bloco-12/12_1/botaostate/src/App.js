import React, { Component } from 'react'
import './App.css';


class Button extends Component {
  render(){
    return (
      <button onClick={() => {
        this.props.handleClick(this.props.label);}}
      >
        {this.props.label}
      </button>
    )
  }
}

class MyLabel extends Component {
  render(){
    return (
      <p>Antes da Props: {this.props.text}</p>
    )
  }
}

// Função APP Main
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      labelText: ''
    }
  }

  setLabelText = (labelText) => {
    this.setState({labelText})
  }

  render() {
    return (
      <div className="App">
        <MyLabel text={this.state.labelText}/>
        <Button handleClick={this.setLabelText} label="Botão 1"/>
        <Button handleClick={this.setLabelText} label="Botão 2"/>
        <Button handleClick={this.setLabelText} label="Botão 3"/>
        <Button handleClick={this.setLabelText} label="Botão 4"/>
      </div>
    );
  }
}

export default App;