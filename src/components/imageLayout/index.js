import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../features/page/pageSlice';
import { fetchImages } from '../../features/images/imagesSlice';
import './imageLayout.css';

const ImagesLayout = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const images = useSelector((state) => state.images.images);
  const page = useSelector((state) => state.page.pageNumber);
  const searchQuery = useSelector((state) => state.images.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery) {
      setIsInitialLoad(false);
      dispatch(fetchImages({ searchQuery, page }));
    } else {
      setIsInitialLoad(true);
    }
  }, [page, searchQuery, dispatch]);

  const handleScroll = () => {
    const height = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const viewHeight = window.innerHeight;

    if (viewHeight + scrollTop + 1 >= height) {
      dispatch(increment());
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='gallery'>
      <h2>{isInitialLoad ? 'Please enter a search query' : searchQuery}</h2>
      {images.length > 0 && !isInitialLoad ? (
        images.map((img, index) => (
          <div className='imgs' >
            <img src={img.urls.small} className='img' alt={img.alt_description} key={img.id}/>
          </div>
        ))
      ) : (
        <p>{isInitialLoad ? '' : 'No results found.'}</p>
      )}
    </div>
  );
};

export default ImagesLayout;

