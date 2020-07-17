import PropTypes from 'prop-types'
import React from 'react';

    
const Picture = (props) => {
  return (
    <div style={{backgroundColor: 'green'}}>
        <p>{props.legenda}</p>
        <img src={props.src} alt={props.alt} style={{height: props.height}}/>
    </div>
    )
}


Picture.defaultProps = {
    height: 100
  }
  
  Picture.propTypes = {
    alt: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
  }


export default Picture;