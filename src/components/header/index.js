import React, { useEffect, useRef, useState } from 'react'
import "./navbar.css"
import { useDispatch } from 'react-redux';
import { fetchImages, clearImages } from '../../features/images/imagesSlice';

const NavBar = () => {

  const searchInput = useRef(null);
  const dispatch = useDispatch();
 const [searchTerm,setSearchTerm] = useState("")
 


  const handleSearch = async (event) => {
      event.preventDefault();
      

      if (searchTerm && searchTerm === '') {
          dispatch(clearImages());
      } else {
          // Reset page to 1 when a new search is performed
          dispatch(fetchImages({ searchQuery: searchTerm, page: 1 }));// Start fetching images from page 1
      }
  };

  useEffect(() => {
      dispatch(clearImages());
    }, [searchTerm, dispatch]);
  return (
   <nav className='navbar'>
  <div className='container'>
    <div className='logo'>
      <h1>Unsplash</h1>
      <p>Search for photos</p>
    </div>
    <div className='nav-search'>
      <form onSubmit={handleSearch}>
        <input type='text' placeholder='Search free high-resolution photos' onChange={(e) => setSearchTerm(e.target.value)}></input>
      </form>
    </div>
  </div>
   </nav>
  )
}

export default NavBar