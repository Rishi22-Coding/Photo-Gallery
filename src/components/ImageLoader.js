import React from 'react'

const ImageLoader = ({item}) => {
  return [...Array(item).keys()].map(() =>(
    <div className="animate-pulse">
        <div className="bg-gray-300 rounded-lg h-72"></div>
    </div>
  ))
}

export default ImageLoader