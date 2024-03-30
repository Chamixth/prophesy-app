// Prophesy.js

import React, { useState } from 'react';


const NavBar = () => {
 
  return (
    <div className='topnav'>
      <a class="active" href='#home'>Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div className='search-container'>
        <form>
          <input type='text' placeholder='....Search' name='search'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
