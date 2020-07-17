import React, { Component } from 'react';
import MyList from './MyList';
import ShowButton from './ShowButton';
import Pictures from './Picture';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Minha Lista de Componentes',
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  render() {
    return (
      <div className='main'>
        <h1>{this.state.title}</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <ShowButton changeTitle={this.changeTitle} value='Título Show' />
          <Pictures
            height={50}
            src="https://course.betrybe.com/images/logo_white.png"
            alt="Logo da Trybe"
            legenda="Lista feita na Trybe"
          />
          <Pictures />
        </MyList>
      </div>
    )
  }
}

export default App;