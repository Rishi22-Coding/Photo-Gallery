import React from 'react'

const ImageExtractor = ({data}) => {
  return (
    <a href={data.urls.regular} target="_blank">
        <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
    </a>
  )
}

export default ImageExtractor;