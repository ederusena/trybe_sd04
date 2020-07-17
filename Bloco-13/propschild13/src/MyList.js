import React from 'react';
const MyList = (props) => {
  let i = 0;
  return (
    <ul className='list'>
      {props.children.map((child) => {
        if (child.type && child.type === 'li' ) return child;
        return <li key={i++}>{child}</li>; 
      })}
    </ul>
  )
}
export default MyList;