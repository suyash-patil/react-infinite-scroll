import React from 'react'
import '../App.css'
export const UnsplashImage = ({ url, key }) => {
  return (
    <div >
      <img className="images" src={url} key={key} alt="" />
    </div>
  )
}

