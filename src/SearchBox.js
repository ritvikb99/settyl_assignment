import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
  return <input className='pa2 ba br-pill' type='search' placeholder='Search Users' onChange={searchChange} />;
};

export default SearchBox;
