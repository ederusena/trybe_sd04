import React from 'react'



class Pokedex extends React.Component {
  render() {
  const { name } = this.props.pokemon
    return (
        <div>
            <p>{name}</p>
        </div>
    );
  }
}

export default Pokedex;