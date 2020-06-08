import React from 'react'


class Pokemon extends React.Component {
  render() {
    return (
      <div className="order">
        <h3>{this.props.name}</h3>
        <h3>{this.props.type}</h3>
        <h3>{this.props.averageWeight.value}</h3>
        <h3>{this.props.averageWeight.measurementUnit}</h3>
        <h3>{this.props.image}</h3>
      </div>
    );
  }
}

export default Pokemon;