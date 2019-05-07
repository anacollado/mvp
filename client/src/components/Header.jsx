import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>vanity</h1>
      <input placeholder="Search products..." value={props.searchInputValue} onChange={props.onSearchInputChange}></input>
    </header>
  )
}

export default Header;