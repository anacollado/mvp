import React from 'react';

function Header(props) {
  return (
    <header>
      <div className="main-logo">
        <img className="logo-img" src="./logo.png" />
        <h1>vanity</h1>
      </div>

      <input placeholder="Search products... " value={props.searchInputValue} onChange={props.onSearchInputChange}></input>
    </header>
  )
}

export default Header;