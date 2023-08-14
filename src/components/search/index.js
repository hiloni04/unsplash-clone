import React from 'react'
import './search.css'




const Search = () => {
   


    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <h1>Unsplash</h1>
                    <p>The internet’s source for visuals.<br></br>
                        Powered by creators everywhere.</p>
                    <div className='hero-search-form'>
                        <form>
                            <input type='text' placeholder='Search free high-resolution photos'></input>
                        </form>
                    </div>
                </div>
            </div>
            <div className='hero-overlay'></div>
        </div>
    )
}

export default Search