import React from 'react';

const SearchBox = ({searchChange})=>{
    return(
    <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search" onChange={searchChange} />
    );
}

export default SearchBox;
