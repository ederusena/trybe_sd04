import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      clickedItem: this.props.content[0].id,
    };
  }

  toggleDropdown() {
    return this.setState(state => {
      return {isOpen: !state.isOpen};
    });
  }

  handleItemClick(id) {
    this.setState({clickedItem: id});
  }

  render() {
    const {children, content} = this.props;

    const {item} = content.find(({id}) => id === this.state.clickedItem);

    return (
      <div className="list-container">
        <span>{children}: {this.state.clickedItem} </span>
        <div
          className="dropdown-button"
          onClick={this.toggleDropdown.bind(this)}>
          {item}
        </div>
        <div className={this.state.isOpen ? 'dropdown-menu' : 'dropdown-menu-hidden'}>
          {content.map(({id, item}) => (
            <div key={id} onClick={() => this.handleItemClick(id)}>
              <span>{item}</span>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  children: 'Minha lista',
};

Dropdown.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.number, item: PropTypes.string}),
  ).isRequired,
  children: PropTypes.string,
};

export default Dropdown;