import React from 'react'
import "./navbar.css"

const NavBar = () => {
  return (
   <nav className='navbar'>
  <div className='container'>
    <div className='logo'>
      <h1>Unsplash</h1>
      <p>Search for photos</p>
    </div>
    <div className='nav-search'>
      <form>
        <input type='text' placeholder='Search free high-resolution photos'></input>
      </form>
    </div>
  </div>
   </nav>
  )
}

export default NavBar