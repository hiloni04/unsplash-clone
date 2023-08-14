import React from 'react'
import './imageLayout.css'

const data = [
  {
    id:1,
    img: '/img1.avif'
  },
  {
    id:2,
    img: '/img4.avif'
  },
  {
    id:3,
    img: '/img2.avif'
  },
  {
    id:4,
    img: '/img3.avif'
  },
  {
    id:5,
    img: '/img5.avif'
  },
  {
    id:6,
    img: '/img6.avif'
  },
]

const ImagesLayout = () => {
  return (

    <div className='gallery'>
 {data.map((img,index) => {
 return(
  <div className='imgs' key={index}>
 <img src={img.img} className='img'></img>
  </div>
 )
 })}
    </div>

  )
}

export default ImagesLayout