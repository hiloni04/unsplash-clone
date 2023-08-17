import React, { useEffect, useRef, useState } from 'react'
import './search.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, clearImages } from '../../features/images/imagesSlice';



const Search = () => {
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
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <h1>Unsplash</h1>
                    <p>The internet’s source for visuals.<br></br>
                        Powered by creators everywhere.</p>
                    <div className='hero-search-form'>
                        <form onSubmit={handleSearch}>
                            <input type='text' placeholder='Search free high-resolution photos' ref={searchInput} onChange={(e) => setSearchTerm(e.target.value)}/>
                        </form>


                    </div>
                </div>
            </div>
            <div className='hero-overlay'></div>
        </div>
    )
}

export default Search

